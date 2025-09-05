import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../redux/features/auth/authApi";
import { MdOutlineFileUpload } from "react-icons/md";
import { useAppSelector } from "../../redux/features/hooks";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileValidation } from "../../schema/editProfileValidation";
import { toast } from "sonner";

type TProfileInput = {
  name?: string;
  address?: string;
  phone?: string;
  image: FileList;
};

const ProfileDetails = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const { data: profile } = useGetUserProfileQuery(undefined);
  const { googleUiu } = useAppSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TProfileInput>({
    resolver: zodResolver(editProfileValidation),
  });
  const watchImage = watch("image");
  // handle profile edit
  const HandleProfileEdit: SubmitHandler<Partial<TProfileInput>> = async (
    data
  ) => {
    // generate profile form data
    const formData = new FormData();
    formData.append("name", data?.name as string);
    formData.append("phone", data?.phone as string);
    formData.append("address", data?.address as string);

    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });

    try {
      const result = await updateProfile(formData)?.unwrap();
      if (result?.success) {
        toast.success("Profile Updated");
      }
    } catch (err) {
      toast.error("Profile update failed");
      console.log(err);
    }
  };

  useEffect(() => {
    const file = watchImage?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  }, [watchImage]);

  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-dashed pb-6 border-b-brand-primary ">
        <h1 className="text-xl font-semibold text-sky-50">My Profile</h1>
        <FiEdit
          onClick={() => setEditProfile(!editProfile)}
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
                {profile?.name}
              </h4>
            </div>
            <div className="space-y-1">
              <h3 className="text-base text-slate-400 font-semibold">
                Full Address
              </h3>
              <h4 className="text-base text-sky-50 font-semibold">
                {profile?.address ? profile?.address : "- Empty -"}
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
                  {profile?.email}
                </h4>
              </div>
              <div className="space-y-1">
                <h3 className="text-base text-slate-400 font-semibold">
                  Phone
                </h3>
                <h4 className="text-base text-sky-50 font-semibold">
                  {profile?.phone ? profile?.phone : "- Empty -"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // profile edit part
        <div>
          {/* profile info change */}
          <form onSubmit={handleSubmit(HandleProfileEdit)}>
            <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="space-y-8">
                <div className="space-y-1">
                  <h3 className="text-base text-slate-400 font-semibold">
                    Full Name
                  </h3>
                  <input
                    {...register("name")}
                    type="text"
                    defaultValue={profile?.name}
                    className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                  />
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.name?.message}
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base text-slate-400 font-semibold">
                    Full Address
                  </h3>
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="Add your full address"
                    defaultValue={profile?.address}
                    className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                  />
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.address?.message}
                  </p>
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
                      disabled
                      value={profile?.email}
                      className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base text-slate-400 font-semibold">
                      Phone
                    </h3>
                    <input
                      {...register("phone")}
                      type="text"
                      placeholder="Add your contact number"
                      defaultValue={profile?.phone}
                      className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                    />
                    <p className="text-red-500 text-sm ml-1">
                      {errors?.phone?.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <h3 className="text-base text-slate-400 font-semibold">
                      Change Profile Image
                    </h3>
                    <MdOutlineFileUpload className="size-7 text-cyan-600" />
                  </div>
                  <div className="w-1/4 h-1/4 cursor-pointer">
                    <label htmlFor="profileImage" className="cursor-pointer">
                      <img
                        src={previewImage ? previewImage : profile?.image}
                        alt="profile image"
                        referrerPolicy="no-referrer"
                        className="w-full rounded-full"
                      />
                    </label>
                  </div>
                  <p className="text-red-500 text-sm ml-1">
                    {errors?.image?.message}
                  </p>
                  <input
                    id="profileImage"
                    {...register("image")}
                    type="file"
                    className="text-brand-secondary"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
            >
              {isLoading ? (
                <span className="loading loading-spinner text-sky-50 loading-md mx-10.5"></span>
              ) : (
                <span> Save Change</span>
              )}
            </button>
          </form>
          {/* pass word change */}
          {!googleUiu && (
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
          )}
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
