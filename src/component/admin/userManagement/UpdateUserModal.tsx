import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../../../redux/features/auth/authApi";
import { updateUpdateValidation } from "../../../schema/userValidation";

type updateUserModalProps = {
  isUpdateUserModalOpen: boolean;
  closeUpdateUserModal: () => void;
  id: string;
};

type TUserInput = {
  role: "user" | "admin";
};

const UpdateUserModal = ({
  isUpdateUserModalOpen,
  closeUpdateUserModal,
  id,
}: updateUserModalProps) => {
  // update User data rtk query api call
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  //   get User data
  const { data: UserData } = useGetSingleUserQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUserInput>({ resolver: zodResolver(updateUpdateValidation) });

  // handle Update User form
  const handleUpdateUserForm: SubmitHandler<TUserInput> = async (data) => {
    if (UserData?.role == data?.role) {
      closeUpdateUserModal();
      toast.error(`Already role is ${data?.role}`);
      return;
    }
    try {
      const result = await updateUser({ id, payload: data });
      if (result && result?.data?.success) {
        toast?.success("User role update successfully");
      } else {
        toast.error("User role update Failed");
      }
      reset();
      closeUpdateUserModal();
    } catch (err) {
      toast.error("User role update Failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className={`modal ${isUpdateUserModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Update user Role</h3>
          <form
            onSubmit={handleSubmit(handleUpdateUserForm)}
            className="space-y-4 lg:space-y-6 mt-8"
          >
            {/* text input */}
            <div className="space-y-4">
              <div>
                <select
                  {...register("role")}
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5 bg-brand-primary cursor-pointer"
                >
                  <option value="user" selected={UserData?.role == "user"}>
                    User
                  </option>
                  <option value="admin" selected={UserData?.role == "admin"}>
                    Admin
                  </option>
                </select>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.role?.message}
                </p>
              </div>
            </div>
            {/* action btns */}
            <div className="flex justify-end gap-2 text-sky-50 mt-8">
              <button
                type="button"
                onClick={() => closeUpdateUserModal()}
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

export default UpdateUserModal;
