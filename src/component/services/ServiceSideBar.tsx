import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import {
  setDuration,
  setMaxPrice,
  setSearchTerm,
} from "../../redux/features/service/serviceSlice";

const ServiceSideBar = () => {
  const [check, setCheck] = useState(0);
  // duration value set global state

  const dispatch = useAppDispatch();
  const { maxPrice } = useAppSelector((state) => state?.service);
  // const [priceRange, setPriceRange] = useState(15000);
  const durationVal = [
    { duration: 15 },
    { duration: 30 },
    { duration: 45 },
    { duration: 60 },
  ];
  const handleClearFilter = () => {
    setCheck(0);
    dispatch(setSearchTerm(""));
    dispatch(setMaxPrice(""));
    dispatch(setDuration(""));
  };

  return (
    <>
      <div className="rounded-lg text-white bg-brand-secondary px-6 py-8 sticky top-24 space-y-3">
        <div>
          <h3 className="text-xl text-sky-50 font-semibold mb-3">Filter</h3>
          <input
            type="range"
            onMouseUp={(e) =>
              dispatch(
                setMaxPrice(Number((e.target as HTMLInputElement).value))
              )
            }
            min={0}
            defaultValue={10000}
            max={15000}
            className="range text-black/30 [--range-bg:#001c44] [--range-thumb:#00B8DB] [--range-fill:0] w-full"
          />
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-slate-300">0৳</p>
            <p className="text-xl font-semibold text-slate-300">
              {maxPrice != "0" && maxPrice == "" ? "150000" : maxPrice}৳
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl text-sky-50 font-semibold mb-3">Duration</h3>
          <div className=" space-y-2">
            {/* checkbox */}
            {durationVal.map((item, index) => (
              <label
                key={index + 1}
                htmlFor={`${index + 1}`}
                className=" select-none cursor-pointer flex items-center gap-4"
              >
                <input
                  type="checkbox"
                  checked={index + 1 === check}
                  onChange={() => {
                    setCheck(index + 1);
                    dispatch(setDuration(item?.duration));
                  }}
                  id={`${index + 1}`}
                  className="checkbox border-cyan-500 bg-brand-primary  checked:checked:bg-cyan-500 checked:bg-brand-primary"
                />
                <span className="text-slate-300 text-lg font-semibold">
                  {item?.duration} min
                </span>
              </label>
            ))}
          </div>
        </div>
        <button
          onClick={handleClearFilter}
          className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide select-none cursor-pointer"
        >
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default ServiceSideBar;
