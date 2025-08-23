import { Link } from "react-router-dom";
type TAdminHeaderProps = {
  handleSidebar: () => void;
};
const AdminDashboardHeader = ({ handleSidebar }: TAdminHeaderProps) => {
  return (
    <>
      <div className=" bg-brand-primary sticky top-0">
        <div className="container  mx-auto sm:py-2">
          <div className="navbar">
            <div className="navbar-start">
              {/* mobile menu */}
              <div className="dropdown">
                <div
                  onClick={handleSidebar}
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
              </div>
              {/* brand logo */}
              <Link
                to="/"
                className="text-sky-50 text-xl sm:text-2xl font-bold cursor-pointer z-10"
              >
                Prime<span className="text-cyan-500">Wash</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardHeader;
