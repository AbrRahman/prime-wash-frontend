import { Link } from "react-router-dom";

const Header = () => {
  const user = true;

  const menuItems = [{ name: "Home", path: "/" }];

  return (
    <>
      <div className=" bg-brand-primary">
        <div className="container  mx-auto px-4 sm:py-2">
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
                      className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300"
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
                      className="text-sky-50 bg-cyan-600 hover:bg-cyan-500 transition duration-300"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* user profile */}
            {user && (
              <div className="navbar-end">
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
                    className="menu menu-sm dropdown-content bg-brand-secondary rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
                      <Link to="" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
