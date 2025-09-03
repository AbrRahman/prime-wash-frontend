import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/features/hooks";
import { logOut } from "../../../redux/features/auth/authSlice";

const Header = () => {
  // const user = false;
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  console.log(user, "header");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/services" },
    { name: "Booking", path: "/booking" },
  ];

  return (
    <>
      <div className=" bg-brand-primary sticky z-50">
        <div className="container  mx-auto sm:py-2">
          <div className="navbar">
            <div className="navbar-start">
              {/* mobile menu */}
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden hover:bg-cyan-600 focus:bg-cyan-600 border-0 transition duration-300 mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-sky-50 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-brand-secondary rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-sky-50 hover:bg-[#0891b2] focus:bg-cyan-600 transition duration-300"
                    >
                      <Link to={item?.path} className="text-sky-50 ">
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* brand logo */}
              <Link
                to="/"
                className="text-sky-50 text-xl sm:text-2xl font-bold cursor-pointer"
              >
                Prime<span className="text-cyan-500">Wash</span>
              </Link>
              ;
            </div>
            {/* desktop menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item?.path}
                      className="text-sky-50  hover:bg-cyan-600 tracking-wide font-semibold transition duration-300 mr-3.5"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* user profile */}

            <div className="navbar-end">
              {/* login register button */}
              {!user && (
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <Link
                      to="/login"
                      className="text-sky-50 bg-cyan-600 hover:bg-cyan-500 tracking-wide font-semibold transition duration-300 mr-3.5"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-sky-50 bg-cyan-600 hover:bg-cyan-500 tracking-wide font-semibold transition duration-300"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              )}
              {user && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-brand-secondary rounded-box !z-50 mt-3 w-52 p-2 shadow"
                  >
                    <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
                      <a href="/dashboard/profile" className="justify-between">
                        Profile
                      </a>
                    </li>
                    <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
                      <a
                        href="/dashboard/my-booking"
                        className="justify-between"
                      >
                        My Bookings
                      </a>
                    </li>
                    <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
                      <Link
                        to="/dashboard/upcoming-booking"
                        className="justify-between"
                      >
                        Upcoming Booking
                      </Link>
                    </li>
                    <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
                      <button
                        onClick={() => dispatch(logOut())}
                        className="justify-between"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
