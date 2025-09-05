import { useGetUserProfileQuery } from "../../redux/features/auth/authApi";
const MyProfilePhoto = () => {
  const { data: profile } = useGetUserProfileQuery(undefined);

  return (
    <>
      <div className="flex justify-center w-1/2 mx-auto mb-4">
        <img
          src={profile?.image}
          alt="Profile image"
          className="w-full rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-4 space-y-1.5">
        <h2 className="text-xl text-center text-sky-50 font-semibold">
          {profile?.name}
        </h2>
        <p className="text-sm text-center text-slate-300 font-semibold">
          {profile?.email}
        </p>
        <p className="text-sm text-center text-slate-300 font-semibold">
          {profile?.phone}
        </p>
      </div>
    </>
  );
};

export default MyProfilePhoto;
