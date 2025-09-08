import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
// import UpdateUserModal from "../../../component/admin/UserManagement/UpdateUserModal";
import { useGetAllUserQuery } from "../../../redux/features/auth/authApi";
import type { TUserData } from "../../../types/auth.type";
import DeleteUserModal from "../../../component/admin/userManagement/DeleteUserModal";
import UpdateUserModal from "../../../component/admin/userManagement/UpdateUserModal";

const UserManagement = () => {
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState("");
  const [updateUserId, setUpdateUserId] = useState("");

  // get all User data
  const { data: userData } = useGetAllUserQuery(undefined);

  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="text-sky-50 text-xl md:text-2xl lg:text-3xl text-center font-semibold">
            User Management
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sky-50">
                <th>User image</th>
                <th> User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {userData?.map((userItem: TUserData) => (
                <tr key={userItem?._id} className="text-slate-300">
                  <td>
                    <img
                      referrerPolicy="no-referrer"
                      src={userItem?.image}
                      alt="User image"
                      className="w-20"
                    />
                  </td>
                  <td>{userItem?.name}</td>
                  <td>{userItem?.email}</td>
                  <td>{userItem?.phone ? userItem?.phone : "Empty"}</td>
                  <td>{userItem?.address ? userItem?.address : "Empty"}</td>
                  <td>{userItem?.role}</td>
                  <td>
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          setIsUpdateUserModalOpen(true);
                          setUpdateUserId(userItem?._id);
                        }}
                        className=" cursor-pointer  text-cyan-500 hover:text-cyan-600 transition duration-300"
                      >
                        <FaEdit className="size-4" />
                      </button>
                      <button
                        onClick={() => {
                          setIsDeleteUserModalOpen(true);
                          setDeleteUserId(userItem?._id);
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

        {/* delete User modal */}
        {isDeleteUserModalOpen && deleteUserId && (
          <DeleteUserModal
            isDeleteUserModalOpen={isDeleteUserModalOpen}
            closeIsDeleteUserModal={() => setIsDeleteUserModalOpen(false)}
            id={deleteUserId}
          />
        )}

        {/* edit User modal */}
        {isUpdateUserModalOpen && updateUserId && (
          <UpdateUserModal
            isUpdateUserModalOpen={isUpdateUserModalOpen}
            closeUpdateUserModal={() => setIsUpdateUserModalOpen(false)}
            id={updateUserId}
          />
        )}
      </div>
    </>
  );
};

export default UserManagement;
