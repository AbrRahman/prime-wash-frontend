const BookingForm = () => {
  return (
    <>
      <div className=" pb-6 px-4  lg:pb-7 rounded-sm shadow-sm">
        <div className="py-b px-4 lg:px-6 lg:pb-7 ">
          <form action="" className="space-y-4 lg:space-y-6">
            {/* text input */}
            <div>
              <input
                name="name"
                id=""
                type="text"
                placeholder="Name"
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>
            <div>
              <input
                name="email"
                id=""
                type="email"
                placeholder="Email"
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>
            <div>
              <input
                name=""
                id=""
                disabled
                value="2024-06-15"
                type="text"
                placeholder=""
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>
            <div>
              <input
                name=""
                id=""
                disabled
                value="12am - 01pm"
                type="text"
                placeholder=""
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>
            <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
