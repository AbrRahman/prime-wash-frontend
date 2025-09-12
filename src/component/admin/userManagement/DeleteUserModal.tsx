import { toast } from "sonner";
import { useDeleteUserMutation } from "../../../redux/features/auth/authApi";

type deleteUserModalProps = {
  isDeleteUserModalOpen: boolean;
  closeIsDeleteUserModal: () => void;
  id: string;
};

const DeleteUserModal = ({
  isDeleteUserModalOpen,
  closeIsDeleteUserModal,
  id,
}: deleteUserModalProps) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDeleteUser = async () => {
    try {
      const result = await deleteUser(id);
      if (result?.data?.success) {
        toast.success("Delete successfully");
      } else {
        toast.error("Delete Failed");
      }
      closeIsDeleteUserModal();
    } catch (err) {
      console.log(err);
      toast.error("Delete Failed");
      closeIsDeleteUserModal();
    }
  };

  return (
    <>
      <div className={`modal ${isDeleteUserModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Delete User</h3>
          <h4 className="text-sky-50 text-base mt-8">
            Are you sure you want to delete this User ?
          </h4>
          <div className="flex justify-end gap-2 text-sky-50 mt-8">
            <button
              type="button"
              onClick={() => closeIsDeleteUserModal()}
              className=" cursor-pointer hover:text-sky-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDeleteUser}
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

export default DeleteUserModal;
