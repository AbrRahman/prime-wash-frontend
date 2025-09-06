import { FaEdit, FaTrash } from "react-icons/fa";
import { useGetAllServiceQuery } from "../../../redux/features/service/serviceApi";
import type { TService } from "../../../types/service.type";
import CreateServiceModal from "../../../component/admin/serviceManagement/CreateServiceModal";
import { useState } from "react";
import DeleteServiceModal from "../../../component/admin/serviceManagement/DeleteServiceModal";
import UpdateServiceModal from "../../../component/admin/serviceManagement/UpdateServiceModal";

const ServiceManagement = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteServiceModalOpen, setIsDeleteServiceModalOpen] =
    useState(false);
  const [isUpdateServiceModalOpen, setIsUpdateServiceModalOpen] =
    useState(false);
  const [deleteServiceId, setDeleteServiceId] = useState("");
  const [updateServiceId, setUpdateServiceId] = useState("");

  // get all service data
  const { data: serviceData } = useGetAllServiceQuery(undefined);
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="text-sky-50 text-xl md:text-2xl lg:text-3xl text-center font-semibold">
            Service Management
          </h1>
        </div>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              setIsCreateModalOpen(true);
            }}
            className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
          >
            Add a service
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sky-50">
                <th>Service Image</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {serviceData?.map((service: TService) => (
                <tr key={service?._id} className="text-slate-300">
                  <td>
                    <img
                      src={service?.image}
                      alt="service image"
                      className="w-20"
                    />
                  </td>
                  <td>{service?.name}</td>
                  <td>{service?.description}</td>
                  <td>{service?.duration} min</td>
                  <td>৳ {service?.price}</td>
                  <td>
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          setIsUpdateServiceModalOpen(true);
                          setUpdateServiceId(service?._id);
                        }}
                        className=" cursor-pointer  text-cyan-500 hover:text-cyan-600 transition duration-300"
                      >
                        <FaEdit className="size-4" />
                      </button>
                      <button
                        onClick={() => {
                          setIsDeleteServiceModalOpen(true);
                          setDeleteServiceId(service?._id);
                        }}
                        className="cursor-pointer text-red-500 hover:text-red-600 transition duration-300"
                      >
                        <FaTrash className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* service create modal */}
        <CreateServiceModal
          isCreateModalOpen={isCreateModalOpen}
          closeCreateModal={() => setIsCreateModalOpen(false)}
        />
        {/* delete service modal */}
        <DeleteServiceModal
          isDeleteServiceModalOpen={isDeleteServiceModalOpen}
          closeIsDeleteServiceModal={() => setIsDeleteServiceModalOpen(false)}
          id={deleteServiceId}
        />

        {/* edit service modal */}
        {isUpdateServiceModalOpen && (
          <UpdateServiceModal
            isUpdateServiceModalOpen={isUpdateServiceModalOpen}
            closeUpdateServiceModal={() => setIsUpdateServiceModalOpen(false)}
            id={updateServiceId}
          />
        )}
      </div>
    </>
  );
};

export default ServiceManagement;
