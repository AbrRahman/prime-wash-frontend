import { useForm, type SubmitHandler } from "react-hook-form";
import type { TService } from "../../../types/service.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useGetAllServiceQuery } from "../../../redux/features/service/serviceApi";
import { slotValidation } from "../../../schema/slotValidation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useCreateSlotMutation } from "../../../redux/features/slot/slotApi";

type createSlotModalProps = {
  isCreateSlotModalOpen: boolean;
  closeCreateSlotModal: () => void;
};

type TSlotInput = {
  service: string;
  startTime: string;
  endTime: string;
};

const CreateSlotModal = ({
  isCreateSlotModalOpen,
  closeCreateSlotModal,
}: createSlotModalProps) => {
  const [slotDate, setSlotData] = useState("");
  const [slotDateErr, setSlotDateErr] = useState("");
  const [createSlot, { isLoading }] = useCreateSlotMutation();
  const { data: service } = useGetAllServiceQuery(undefined);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSlotInput>({ resolver: zodResolver(slotValidation) });

  // handle create slot form
  const handleCreateSlotForm: SubmitHandler<TSlotInput> = async (data) => {
    if (!slotDate) {
      setSlotDateErr("Slot date is require");
      return;
    }
    try {
      const result = await createSlot({ ...data, date: slotDate });
      if (result && result?.data?.success) {
        toast?.success("Slot create successfully");
      } else {
        toast.error("Slot create Failed");
      }
      reset();
      closeCreateSlotModal();
    } catch (err) {
      toast.error("Slot create Failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className={`modal ${isCreateSlotModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box md:w-1/2 max-w-none bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Create Slot</h3>
          <form
            onSubmit={handleSubmit(handleCreateSlotForm)}
            className="space-y-4 lg:space-y-6 mt-8"
          >
            {/* text input */}
            <div className="space-y-4">
              <div>
                <select
                  {...register("service")}
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5 bg-brand-primary cursor-pointer"
                >
                  <option selected value="">
                    Select a service
                  </option>

                  {service?.map((item: TService) => (
                    <option key={item?._id} value={item?._id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.service?.message}
                </p>
              </div>
              <div>
                <DatePicker
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  selected={new Date()}
                  minDate={new Date()}
                  onChange={(date) =>
                    setSlotData(date?.toISOString()?.slice(0, 10) as string)
                  }
                />
                <p className="text-red-500 text-sm ml-1">{slotDateErr}</p>
              </div>
              <div>
                <input
                  {...register("startTime")}
                  type="text"
                  placeholder="Enter slot start time (min). eg- 09:30 *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.startTime?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("endTime")}
                  type="text"
                  placeholder="Enter slot end time (min). eg- 13:30 *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.endTime?.message}
                </p>
              </div>
            </div>
            {/* action btns */}
            <div className="flex justify-end gap-2 text-sky-50 mt-8">
              <button
                type="button"
                onClick={() => closeCreateSlotModal()}
                className=" cursor-pointer hover:text-sky-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-sky-50 bg-cyan-600 px-6 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
              >
                {isLoading ? (
                  <span className="loading loading-spinner text-sky-50 loading-sm mx-3.5"></span>
                ) : (
                  <span>Create</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSlotModal;
