import { toast } from "sonner";
import { useDeleteSlotMutation } from "../../../redux/features/slot/slotApi";

type deleteSlotModalProps = {
  isDeleteSlotModalOpen: boolean;
  closeIsDeleteSlotModal: () => void;
  id: string;
};

const DeleteSlotModal = ({
  isDeleteSlotModalOpen,
  closeIsDeleteSlotModal,
  id,
}: deleteSlotModalProps) => {
  const [deleteSlot, { isLoading }] = useDeleteSlotMutation();

  const handleDeleteService = async () => {
    try {
      const result = await deleteSlot(id);
      console.log(result);
      console.log(result);
      if (result?.data?.success) {
        toast.success("Delete successfully");
      } else {
        toast.error("Delete Failed");
      }
      closeIsDeleteSlotModal();
    } catch (err) {
      console.log(err);
      toast.error("Delete Failed");
      closeIsDeleteSlotModal();
    }
  };

  return (
    <>
      <div className={`modal ${isDeleteSlotModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Delete slot</h3>
          <h4 className="text-sky-50 text-base mt-8">
            Are you sure you want to delete this slot ?
          </h4>
          <div className="flex justify-end gap-2 text-sky-50 mt-8">
            <button
              type="button"
              onClick={() => closeIsDeleteSlotModal()}
              className=" cursor-pointer hover:text-sky-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDeleteService}
              className="text-sky-50 bg-cyan-600 px-6 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
            >
              {isLoading ? (
                <span className="loading loading-spinner text-sky-50 loading-sm mx-3.5"></span>
              ) : (
                <span>Delete</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSlotModal;
