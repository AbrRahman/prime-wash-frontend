import { toast } from "sonner";
import { useDeleteServiceMutation } from "../../../redux/features/service/serviceApi";

type deleteServiceModalProps = {
  isDeleteServiceModalOpen: boolean;
  closeIsDeleteServiceModal: () => void;
  id: string;
};

const DeleteServiceModal = ({
  isDeleteServiceModalOpen,
  closeIsDeleteServiceModal,
  id,
}: deleteServiceModalProps) => {
  const [deleteService, { isLoading }] = useDeleteServiceMutation();

  const handleDeleteService = async () => {
    try {
      const result = await deleteService(id);
      if (result?.data?.success) {
        toast.success("Delete successfully");
      } else {
        toast.error("Delete Failed");
      }
      closeIsDeleteServiceModal();
    } catch (err) {
      console.log(err);
      toast.error("Delete Failed");
      closeIsDeleteServiceModal();
    }
  };

  return (
    <>
      <div className={`modal ${isDeleteServiceModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Delete service</h3>
          <h4 className="text-sky-50 text-base mt-8">
            Are you sure you want to delete this service ?
          </h4>
          <div className="flex justify-end gap-2 text-sky-50 mt-8">
            <button
              type="button"
              onClick={() => closeIsDeleteServiceModal()}
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

export default DeleteServiceModal;
