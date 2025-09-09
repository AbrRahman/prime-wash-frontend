import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { TRegisterInput } from "../../types/register.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormValidation } from "../../schema/registerFormValidation";
import {
  useCreateUserMutation,
  useGoogleLoginMutation,
} from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { TErrorResponse } from "../../types/error.type";
import { useState } from "react";
import { loginWithGoogle } from "../../redux/features/auth/firebase/authService";
import { verifyToken } from "../../utils/verifyToken";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, { isLoading }] = useCreateUserMutation();
  const [googleLogin] = useGoogleLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [duplicateEmailError, setDuplicateEmailError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TRegisterInput>({
    resolver: zodResolver(registerFormValidation),
  });
  const watchImage = watch("image");

  // handle register
  const handleUserRegister: SubmitHandler<Partial<TRegisterInput>> = async (
    data
  ) => {
    // generate form data
    const formData = new FormData();
    formData.append("name", data?.name as string);
    formData.append("email", data?.email as string);
    formData.append("phone", data?.phone as string);
    formData.append("password", data?.password as string);
    formData.append("address", data?.address as string);

    // if image user not upload set default image
    if (!watchImage?.length) {
      formData.append(
        "image",
        "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1757393705/user_8895458_f5usma.png"
      );
    }
    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });

    const result = await registerUser(formData);
    // console.log(result);
    if (result?.data?.success) {
      toast.success("Register successfully");
      reset();
      navigate("/login");
    }

    // handle backend error
    if ("error" in result) {
      const err = result?.error as FetchBaseQueryError & {
        data: TErrorResponse;
      };
      if (err?.data?.error?.code == 11000) {
        setDuplicateEmailError(err.data.errorSource?.[0]?.message);
      }
      toast.error("Register failed");
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

        const user = await verifyToken(data?.data?.accessToken);

        dispatch(setUser({ user, token: data?.data?.accessToken, uid }));
        toast.success("Login ");
        const from = location.state?.from?.pathname || "/";
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
              Register
            </h1>
            <form
              onSubmit={handleSubmit(handleUserRegister)}
              className="space-y-4 lg:space-y-6"
            >
              {/* text input */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Full name *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.name?.message}
                  </p>
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.email?.message
                      ? errors?.email?.message
                      : duplicateEmailError}
                  </p>
                </div>
                <div>
                  <input
                    {...register("phone")}
                    type="text"
                    placeholder="Phone *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.phone?.message}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="Address "
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.address?.message}
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Password *"
                      className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                    ></input>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-600 hover:text-cyan-500 transition cursor-pointer duration-300"
                    >
                      {showPassword ? (
                        <FiEyeOff className="size-5" />
                      ) : (
                        <FiEye className="size-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.password?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <label
                    htmlFor="fileUpload"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-slate-400 px-2.5 py-2 cursor-pointer"
                  >
                    {watchImage?.length
                      ? watchImage[0]?.name
                      : "Upload Profile Photo"}
                  </label>
                  <input
                    {...register("image")}
                    type="file"
                    className="hidden"
                    id="fileUpload"
                  ></input>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.image?.message}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-1 text-sky-50 text-base">
                  {" "}
                  Already have an account?{" "}
                  <Link className="text-cyan-500 font-semibold" to="/login">
                    Login
                  </Link>
                </p>
                <button
                  disabled={isLoading}
                  className="text-sky-50 bg-cyan-600 px-6 py-1.5  rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner text-sky-50 loading-sm mx-6"></span>
                  ) : (
                    <span> Register</span>
                  )}
                </button>
              </div>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 text-sky-50 mt-3 w-full bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Start with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
