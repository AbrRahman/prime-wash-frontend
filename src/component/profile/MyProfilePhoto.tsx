import ProfileImage from "../../assets/images/member1.png";
const MyProfilePhoto = () => {
  return (
    <>
      <div className="flex justify-center w-1/2 mx-auto mb-4">
        <img src={ProfileImage} alt="" className="w-full rounded-full" />
      </div>
      <div className="mt-4 space-y-1.5">
        <h2 className="text-xl text-center text-sky-50 font-semibold">
          Emma Collins
        </h2>
        <p className="text-sm text-center text-slate-300 font-semibold">
          emmacollins@gamil.com
        </p>
        <p className="text-sm text-center text-slate-300 font-semibold">
          013425324234
        </p>
      </div>
    </>
  );
};

export default MyProfilePhoto;
