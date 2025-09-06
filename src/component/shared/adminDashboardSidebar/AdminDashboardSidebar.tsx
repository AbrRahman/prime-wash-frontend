import { Link } from "react-router-dom";
type TAdminSidebarProps = {
  handleSidebar: () => void;
};
const AdminDashboardSidebar = ({ handleSidebar }: TAdminSidebarProps) => {
  return (
    <>
      <ul className="menu text-base-content dropdown-content  min-h-full w-64 bg-brand-primary p-4">
        <div className="mt-2 flex justify-end">
          {/* slider btn */}
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
        <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm mt-6 lg:mt-12">
          <a href="/dashboard/profile" className="justify-between">
            Service Management
          </a>
        </li>
        <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
          <a href="/dashboard/my-booking" className="justify-between">
            Slot Management
          </a>
        </li>
        <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
          <Link to="/dashboard/upcoming-booking" className="justify-between">
            User Management
          </Link>
        </li>
        <li className="text-sky-50 hover:bg-cyan-600 focus:bg-cyan-600 transition duration-300 rounded-sm">
          <Link to="/dashboard/upcoming-booking" className="justify-between">
            See All Booking
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminDashboardSidebar;
