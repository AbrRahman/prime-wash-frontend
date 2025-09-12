import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updateSlotValidation } from "../../../schema/slotValidation";
import {
  useGetSingleSlotQuery,
  useUpdateSlotMutation,
} from "../../../redux/features/slot/slotApi";

type updateSlotModalProps = {
  isUpdateSlotModalOpen: boolean;
  closeUpdateSlotModal: () => void;
  id: string;
};

type TSlotInput = {
  isBooked: "booked" | "available";
};

const UpdateSlotModal = ({
  isUpdateSlotModalOpen,
  closeUpdateSlotModal,
  id,
}: updateSlotModalProps) => {
  // update slot data rtk query api call
  const [updateSlot, { isLoading }] = useUpdateSlotMutation();

  //   get slot data
  const { data: SlotData } = useGetSingleSlotQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSlotInput>({ resolver: zodResolver(updateSlotValidation) });

  // handle Update slot form
  const handleUpdateSlotForm: SubmitHandler<TSlotInput> = async (data) => {
    if (SlotData?.isBooked == data?.isBooked) {
      closeUpdateSlotModal();
      toast.error(`Already booking status ${data?.isBooked}`);
      return;
    }
    try {
      const result = await updateSlot({ payload: data, id });

      if (result && result?.data?.success) {
        toast?.success("Slot update successfully");
      } else {
        toast.error("Slot update Failed");
      }
      reset();
      closeUpdateSlotModal();
    } catch (err) {
      toast.error("Slot update Failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className={`modal ${isUpdateSlotModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">
            Update Booking Status
          </h3>
          <form
            onSubmit={handleSubmit(handleUpdateSlotForm)}
            className="space-y-4 lg:space-y-6 mt-8"
          >
            {/* text input */}
            <div className="space-y-4">
              <div>
                <select
                  {...register("isBooked")}
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5 bg-brand-primary cursor-pointer"
                >
                  <option
                    value="booked"
                    selected={SlotData?.isBooked == "booked"}
                  >
                    Booked
                  </option>
                  <option
                    value="available"
                    selected={SlotData?.isBooked == "available"}
                  >
                    Available
                  </option>
                </select>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.isBooked?.message}
                </p>
              </div>
            </div>
            {/* action btns */}
            <div className="flex justify-end gap-2 text-sky-50 mt-8">
              <button
                type="button"
                onClick={() => closeUpdateSlotModal()}
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
                  <span>Update</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateSlotModal;
