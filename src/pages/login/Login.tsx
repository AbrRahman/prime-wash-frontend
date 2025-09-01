import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-brand-primary">
        <div className="container px-5 mx-auto py-12 lg:pb-20 lg:pt-12 flex justify-center">
          <div className="py-10 px-8 lg:px-15 lg:py-12 bg-brand-secondary md:w-1/2 rounded-lg shadow-lg">
            <h1 className=" text-sky-50 text-2xl md:text-3xl  font-bold mb-8 ">
              Login
            </h1>
            <form action="" className="space-y-4 lg:space-y-6">
              {/* text input */}
              <div className="space-y-4">
                <div>
                  <input
                    name=""
                    type="email"
                    placeholder="Email *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1 hidden">
                    filed error{" "}
                  </p>
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password *"
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <p className="text-red-500 text-sm ml-1 hidden">
                    filed error{" "}
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
                <button className="text-sky-50 bg-cyan-600 px-6 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none">
                  Login
                </button>
              </div>
            </form>
            <button className="flex items-center justify-center gap-2 text-sky-50 mt-3 w-full bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer">
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
