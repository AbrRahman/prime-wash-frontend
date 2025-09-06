import { useForm, type SubmitHandler } from "react-hook-form";
import type { TServiceInput } from "../../../types/service.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateServiceValidation } from "../../../schema/serviceValidation";
import { toast } from "sonner";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "../../../redux/features/service/serviceApi";

// type Update service modal type define
type updateServiceModalProps = {
  isUpdateServiceModalOpen: boolean;
  closeUpdateServiceModal: () => void;
  id: string;
};

const UpdateServiceModal = ({
  isUpdateServiceModalOpen,
  closeUpdateServiceModal,
  id,
}: updateServiceModalProps) => {
  // load service data for modal input
  const { data: serviceData } = useGetSingleServiceQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  //   call update service redux rtk query
  const [updateService, { isLoading }] = useUpdateServiceMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<TServiceInput>>({
    resolver: zodResolver(updateServiceValidation),
  });
  console.log(serviceData);
  // handel update service
  const handleUpdateServiceForm: SubmitHandler<Partial<TServiceInput>> = async (
    data
  ) => {
    // generate form data
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (value && key !== "image") {
        formData.append(key, value as string);
      }
    }

    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });

    try {
      console.log("hi");
      const result = await updateService({ formData, id });
      console.log(result);
      if (result && result?.data?.success) {
        toast?.success("Service update successfully");
      } else {
        toast.error("Service update Failed");
      }
      reset();
      closeUpdateServiceModal();
    } catch (err) {
      toast.error("Service update Failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className={`modal ${isUpdateServiceModalOpen ? "modal-open" : ""} `}>
        <div className="modal-box md:w-1/2 max-w-none bg-brand-primary ">
          <h3 className="font-bold text-lg text-sky-50">Update service</h3>
          <form
            onSubmit={handleSubmit(handleUpdateServiceForm)}
            className="space-y-4 lg:space-y-6 mt-8"
          >
            {/* text input */}
            <div className="space-y-4">
              <div>
                <input
                  {...register("name")}
                  defaultValue={serviceData?.name}
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
                  defaultValue={serviceData?.description}
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
                  defaultValue={serviceData?.duration}
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
                  defaultValue={serviceData?.price}
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
                onClick={() => closeUpdateServiceModal()}
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

export default UpdateServiceModal;
