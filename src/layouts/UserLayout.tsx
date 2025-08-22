import { Outlet } from "react-router-dom";
import MyProfilePhoto from "../component/profile/MyProfilePhoto";

const UserLayout = () => {
  return (
    <>
      <div className="bg-brand-primary ">
        <div className=" container mx-auto px-4 pt-4 pb-12 lg:pt-6 lg:pb-20">
          <div className=" grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* profile image part */}
            <div className="lg:col-span-3 bg-brand-secondary rounded-lg shadow px-4 pt-8 pb-10">
              <MyProfilePhoto />
            </div>
            {/* profile details */}
            <div className="lg:col-span-9 bg-brand-secondary rounded-lg shadow p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
