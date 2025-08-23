import { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import profileImage from "../../assets/images/member1.png";
const ProfileDetails = () => {
  const [editProfile, serEditProfile] = useState(false);
  const [profileImg, setProfileImg] = useState(profileImage);
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFileFiled = () => {
    fileRef?.current?.click();
  };
  useEffect(() => {
    const file = fileRef.current;
    console.log(file);
    // if (file) {
    // //   const objectUrl = URL.createObjectURL(file);
    //   setProfileImg(objectUrl);
    // }
  }, [fileRef]);
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-dashed pb-6 border-b-brand-primary ">
        <h1 className="text-xl font-semibold text-sky-50">My Profile</h1>
        <FiEdit
          onClick={() => serEditProfile(!editProfile)}
          className="text-xl font-semibold text-cyan-500 hover:text-cyan-600 transition duration-300 cursor-pointer"
        />
      </div>
      {/* profile info */}
      {!editProfile ? (
        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-base text-slate-400 font-semibold">
                Full Name
              </h3>
              <h4 className="text-base text-sky-50 font-semibold">
                Emma Collins
              </h4>
            </div>
            <div className="space-y-1">
              <h3 className="text-base text-slate-400 font-semibold">
                Full Address
              </h3>
              <h4 className="text-base text-sky-50 font-semibold">
                Mirpur-10, Dahaka, Bangladesh
              </h4>
            </div>
          </div>
          <div>
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-base text-slate-400 font-semibold">
                  Email
                </h3>
                <h4 className="text-base text-sky-50 font-semibold">
                  emmacollins@gamil.com
                </h4>
              </div>
              <div className="space-y-1">
                <h3 className="text-base text-slate-400 font-semibold">
                  Phone
                </h3>
                <h4 className="text-base text-sky-50 font-semibold">
                  013425324234
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // profile edit part
        <div>
          {/* profile info change */}
          <form action="">
            <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="space-y-8">
                <div className="space-y-1">
                  <h3 className="text-base text-slate-400 font-semibold">
                    Full Name
                  </h3>
                  <input
                    type="text"
                    value="Emma Collins"
                    className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base text-slate-400 font-semibold">
                    Full Address
                  </h3>
                  <input
                    type="text"
                    value="Mirpur-10, Dahaka, Bangladesh"
                    className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-8">
                  <div className="space-y-1">
                    <h3 className="text-base text-slate-400 font-semibold">
                      Email
                    </h3>
                    <input
                      type="text"
                      value="emmacollins@gamil.com"
                      className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base text-slate-400 font-semibold">
                      Phone
                    </h3>
                    <input
                      type="text"
                      value="013425324234"
                      className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-1">
                  <h3 className="text-base text-slate-400 font-semibold">
                    Change Profile Image
                  </h3>
                  <div
                    className="w-1/4 h-1/4 cursor-pointer"
                    onClick={handleFileFiled}
                  >
                    <img
                      src={profileImg}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    className="text-brand-secondary"
                  />
                </div>
              </div>
            </div>
            <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer">
              Save Change
            </button>
          </form>
          {/* pass word change */}
          <div>
            <div className="border-b-2 border-dashed py-3 mt-5 border-b-brand-primary ">
              <h1 className="text-base font-semibold text-sky-50">
                Password Change
              </h1>
            </div>
            <form action="" className="my-5">
              <div>
                <div className="space-y-1">
                  <h3 className="text-base text-slate-400 font-semibold">
                    Old Password
                  </h3>
                  <input
                    type="password"
                    placeholder="Enter your ond password"
                    className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                  />
                </div>
                <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base text-slate-400 font-semibold">
                      New Password
                    </h3>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base text-slate-400 font-semibold">
                      Confirm Password
                    </h3>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                    />
                  </div>
                </div>
              </div>
              <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer">
                Change Password
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
