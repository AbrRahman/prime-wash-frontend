import { useEffect, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import {
  useGetUserProfileQuery,
  usePasswordChangeMutation,
  useUpdateProfileMutation,
} from "../../redux/features/auth/authApi";
import { MdOutlineFileUpload } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editProfileValidation,
  passwordValidation,
} from "../../schema/editProfileValidation";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/features/auth/authSlice";

type TProfileInput = {
  name?: string;
  address?: string;
  phone?: string;
  image: FileList;
};
type TPasswordInput = {
  password: string;
  oldPassword: string;
  confirmPassword: string;
};

const ProfileDetails = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [passwordConfirmErr, setPasswordConfirmErr] = useState("");

  const { data: profile } = useGetUserProfileQuery(undefined);
  const { googleUiu } = useAppSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [updatePassword, { isLoading: passwordLoading }] =
    usePasswordChangeMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  // password change form
  const {
    register: passwordRegister,
    handleSubmit: passwordHandleSubmit,
    reset,
    formState: { errors: passwordZodValidationErr },
  } = useForm<TPasswordInput>({ resolver: zodResolver(passwordValidation) });

  const handelPasswordChange: SubmitHandler<TPasswordInput> = async (data) => {
    if (data?.password !== data?.confirmPassword) {
      setPasswordConfirmErr("Passwords do not match");
      return;
    }
    try {
      const result = await updatePassword({
        password: data?.password,
        oldPassword: data?.oldPassword,
      }).unwrap();
      if (result?.success) {
        toast.success("Password changed successfully!");
        reset();
        setPasswordConfirmErr("");
        dispatch(logOut());
        navigate("/login");
      } else {
        toast.error("Something went wrong");
      }
      console.log(result);
    } catch (err) {
      toast.error("Something went wrong. Try again later.");
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
              <form
                onSubmit={passwordHandleSubmit(handelPasswordChange)}
                className="my-5"
              >
                <div>
                  <div className="space-y-1">
                    <h3 className="text-base text-slate-400 font-semibold">
                      Old Password
                    </h3>
                    <div className="relative">
                      <input
                        {...passwordRegister("oldPassword")}
                        type={showOldPassword ? "text" : "password"}
                        placeholder="Enter your ond password"
                        className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                      />

                      {/* Toggle Eye Button */}
                      <button
                        type="button"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-600 hover:text-cyan-500 transition cursor-pointer duration-300"
                      >
                        {showOldPassword ? (
                          <FiEyeOff className="size-5" />
                        ) : (
                          <FiEye className="size-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-red-500 text-sm ml-1">
                      {passwordZodValidationErr?.oldPassword?.message}
                    </p>
                  </div>
                  <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <h3 className="text-base text-slate-400 font-semibold">
                        New Password
                      </h3>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          {...passwordRegister("password")}
                          placeholder="Enter new password"
                          className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-600 hover:text-cyan-500 transition cursor-pointer duration-300"
                        >
                          {showNewPassword ? (
                            <FiEyeOff className="size-5" />
                          ) : (
                            <FiEye className="size-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-red-500 text-sm ml-1">
                        {passwordZodValidationErr?.password?.message}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base text-slate-400 font-semibold">
                        Confirm Password
                      </h3>
                      <div className="relative">
                        <input
                          {...passwordRegister("confirmPassword")}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          className=" text-slate-300 bg-brand-primary  w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50  px-2.5 py-1.5"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-600 hover:text-cyan-500 transition cursor-pointer duration-300"
                        >
                          {showConfirmPassword ? (
                            <FiEyeOff className="size-5" />
                          ) : (
                            <FiEye className="size-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-red-500 text-sm ml-1">
                        {passwordZodValidationErr?.confirmPassword?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-red-500 text-sm mb-1.5">
                  {passwordConfirmErr}
                </p>
                <button
                  type="submit"
                  className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
                >
                  {passwordLoading ? (
                    <span className="loading loading-spinner text-sky-50 loading-md mx-15.5"></span>
                  ) : (
                    <span>Change Password</span>
                  )}
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
