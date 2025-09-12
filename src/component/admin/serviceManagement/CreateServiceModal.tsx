import { useForm, type SubmitHandler } from "react-hook-form";
import type { TServiceInput } from "../../../types/service.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceValidation } from "../../../schema/serviceValidation";
import { toast } from "sonner";
import { useCreateServiceMutation } from "../../../redux/features/service/serviceApi";

type createModalProps = {
  isCreateModalOpen: boolean;
  closeCreateModal: () => void;
};

const CreateServiceModal = ({
  isCreateModalOpen,
  closeCreateModal,
}: createModalProps) => {
  const [createService, { isLoading }] = useCreateServiceMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TServiceInput>({ resolver: zodResolver(serviceValidation) });
  // handle create service form

  const handleCreateServiceForm: SubmitHandler<TServiceInput> = async (
    data
  ) => {
    // generate form data
    const formData = new FormData();
    formData.append("name", data?.name as string);
    formData.append("description", data?.description as string);
    formData.append("duration", data?.duration as string);
    formData.append("price", data?.price as string);

    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });

    try {
      const result = await createService(formData);
      if (result && result?.data?.success) {
        toast?.success("Service create successfully");
      } else {
        toast.error("Service create Failed");
      }
      reset();
      closeCreateModal();
    } catch (err) {
      toast.error("Service create Failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className={`modal ${isCreateModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box md:w-1/2 max-w-none bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Upload a service</h3>
          <form
            onSubmit={handleSubmit(handleCreateServiceForm)}
            className="space-y-4 lg:space-y-6 mt-8"
          >
            {/* text input */}
            <div className="space-y-4">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Service name *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.name?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("description")}
                  type="text"
                  placeholder="Service description *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.description?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("duration")}
                  type="text"
                  placeholder="Service duration min. eg- 45 *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.duration?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("price")}
                  type="text"
                  placeholder="Service price *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.price?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("image")}
                  type="file"
                  placeholder="Service image *"
                  className=" w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></input>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.image?.message}
                </p>
              </div>
            </div>
            {/* action btns */}
            <div className="flex justify-end gap-2 text-sky-50 mt-8">
              <button
                type="button"
                onClick={() => closeCreateModal()}
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
                  <span>Save Change</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateServiceModal;
