import { FaEdit, FaTrash } from "react-icons/fa";

import { useState } from "react";
import { useGetAllSlotQuery } from "../../../redux/features/booking/bookingApi";
import type { TSlotData } from "../../../types/slot.type";
import DeleteSlotModal from "../../../component/admin/slotManagement/DeleteSlotModal";
import CreateSlotModal from "../../../component/admin/slotManagement/CreateSlotModal";
import UpdateSlotModal from "../../../component/admin/slotManagement/updateSlotModal";

const SlotManagement = () => {
  const [isCreateSlotModalOpen, setIsCreateSlotModalOpen] = useState(false);
  const [isDeleteSlotModalOpen, setIsDeleteSlotModalOpen] = useState(false);
  const [isUpdateSlotModalOpen, setIsUpdateSlotModalOpen] = useState(false);
  const [deleteSlotId, setDeleteSlotId] = useState("");
  const [updateSlotId, setUpdateSlotId] = useState("");

  // get all service data
  const { data: slotData } = useGetAllSlotQuery(undefined);
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="text-sky-50 text-xl md:text-2xl lg:text-3xl text-center font-semibold">
            Slot Management
          </h1>
        </div>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              setIsCreateSlotModalOpen(true);
            }}
            className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
          >
            Add a Slot
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sky-50">
                <th>Service name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {slotData?.map((slot: TSlotData) => (
                <tr key={slot?._id} className="text-slate-300">
                  <td>{slot?.service?.name}</td>
                  <td>{slot?.date}</td>
                  <td>{slot?.startTime}</td>
                  <td>{slot?.endTime} min</td>
                  <td>৳ {slot?.isBooked}</td>
                  <td>
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          setIsUpdateSlotModalOpen(true);
                          setUpdateSlotId(slot?._id);
                        }}
                        className=" cursor-pointer  text-cyan-500 hover:text-cyan-600 transition duration-300"
                      >
                        <FaEdit className="size-4" />
                      </button>
                      <button
                        onClick={() => {
                          setIsDeleteSlotModalOpen(true);
                          setDeleteSlotId(slot?._id);
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
        {/* slot create modal */}
        {isCreateSlotModalOpen && (
          <CreateSlotModal
            isCreateSlotModalOpen={isCreateSlotModalOpen}
            closeCreateSlotModal={() => setIsCreateSlotModalOpen(false)}
          />
        )}

        {/* delete slot modal */}
        {isDeleteSlotModalOpen && deleteSlotId && (
          <DeleteSlotModal
            isDeleteSlotModalOpen={isDeleteSlotModalOpen}
            closeIsDeleteSlotModal={() => setIsDeleteSlotModalOpen(false)}
            id={deleteSlotId}
          />
        )}

        {/* edit service modal */}
        {isUpdateSlotModalOpen && updateSlotId && (
          <UpdateSlotModal
            isUpdateSlotModalOpen={isUpdateSlotModalOpen}
            closeUpdateSlotModal={() => setIsUpdateSlotModalOpen(false)}
            id={updateSlotId}
          />
        )}
      </div>
    </>
  );
};

export default SlotManagement;
