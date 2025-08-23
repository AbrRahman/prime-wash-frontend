import { useState } from "react";
import AdminDashboardSidebar from "../component/shared/adminDashboardSidebar/adminDashboardSidebar";
import AdminDashboardHeader from "../component/shared/adminDashboardHeader/adminDashboardHeader";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle "
          checked={isOpen}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <AdminDashboardHeader handleSidebar={() => setIsOpen(!isOpen)} />
          <div className="p-6 bg-brand-secondary h-screen">
            <Outlet />
            <h1>Here is page content</h1>
          </div>
        </div>
        <div className="drawer-side">
          <AdminDashboardSidebar handleSidebar={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
