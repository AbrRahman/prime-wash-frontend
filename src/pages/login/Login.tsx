import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../redux/features/auth/firebase/authService";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {
  useGoogleLoginMutation,
  useLoginMutation,
} from "../../redux/features/auth/authApi";
import { verifyToken } from "../../utils/verifyToken";
import { useAppDispatch } from "../../redux/features/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidation from "../../schema/loginValidation";
import { useState } from "react";

type TLoginInput = {
  email: string;
  password: string;
};

const Login = () => {
  const [unauthorizeErr, setUnAuthorizeErr] = useState("");
  const [googleLogin] = useGoogleLoginMutation();
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors: zodError },
  } = useForm<TLoginInput>({ resolver: zodResolver(loginValidation) });

  const from = location.state?.from?.pathname || "/";

  //  handle jwt email password login
  const handleLogin: SubmitHandler<TLoginInput> = async (payload) => {
    try {
      const result = await login(payload);

      // handle invalid email or password case
      if ("error" in result) {
        const err = result?.error as FetchBaseQueryError & {
          status: number;
        };

        if (err?.status == 401) {
          toast.error("Login failed");
          setUnAuthorizeErr("Invalid email or password");
          return;
        }
      }

      const user = await verifyToken(result?.data?.accessToken);
      dispatch(setUser({ user, token: result?.data?.accessToken, uid: null }));
      toast.success("Login ");

      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Login failed");
      console.log(err);
    }
  };

  // handle google login
  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();

      const { photoURL, displayName, email, uid } = result;

      if (photoURL && displayName && email) {
        const { data } = await googleLogin({
          name: displayName,
          email: email,
          image: photoURL,
        });
        console.log(data);
        console.log(data?.data?.accessToken);
        const user = await verifyToken(data?.data?.accessToken);
        if (!user) {
          toast.error("Login failed");
          return;
        }

        dispatch(setUser({ user, token: data?.data?.accessToken, uid }));
        toast.success("Login ");
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error("Login failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-brand-primary">
        <div className="container px-5 mx-auto py-12 lg:pb-20 lg:pt-12 flex justify-center">
          <div className="py-10 px-8 lg:px-15 lg:py-12 bg-brand-secondary md:w-1/2 rounded-lg shadow-lg">
            <h1 className=" text-sky-50 text-2xl md:text-3xl  font-bold mb-8 ">
              Login
            </h1>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="space-y-4 lg:space-y-6"
            >
              {/* text input */}
              <div className="space-y-4">
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {zodError?.email?.message}
                  </p>
                </div>

                <div>
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {zodError?.password?.message}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-1 text-sky-50 text-base">
                  {" "}
                  Don't have an account?{" "}
                  <Link className="text-cyan-500 font-semibold" to="/register">
                    Register
                  </Link>
                </p>
                <p className="text-red-500 text-sm ml-1 pb-0.5">
                  {unauthorizeErr}
                </p>
                <button
                  type="submit"
                  className="text-sky-50 bg-cyan-600 px-6 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner text-sky-50 loading-sm mx-3.5"></span>
                  ) : (
                    <span> Login</span>
                  )}
                </button>
              </div>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 text-sky-50 mt-3 w-full bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
