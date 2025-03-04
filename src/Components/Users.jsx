import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
      const loaded_user = useLoaderData();
      const [users, set_users] = useState(loaded_user);
      const handle_delete = (id) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`https://coffee-store-server-jade-nine.vercel.app/users/${id}`, {
                              method: 'DELETE',
                        })
                              .then(res => res.json())
                              .then((data) => {
                                    console.log('user data', data);
                                    if (data.deletedCount > 0) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "User has been deleted.",
                                                icon: "success"
                                          });
                                          const remaining_users = users.filter((user) => user._id !== id);
                                          set_users(remaining_users);
                                    }
                              })
                  }
            });
      }
      return (
            <div className='w-9/12 mx-auto'>
                  <h1 className='text-center text-2xl font-semibold'>This is users page : {users.length}</h1>
                  <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                    <tr>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Create At</th>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                          <tr key={user._id} className="hover:bg-gray-50 transition-colors duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                      <div className="text-sm text-gray-500">{user.email}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                      <div className="text-sm text-gray-500 capitalize">{user.create}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                      <span
                                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'active'
                                                                  ? 'bg-green-100 text-green-800'
                                                                  : 'bg-red-100 text-red-800'
                                                                  }`}
                                                      >
                                                            {user.status}
                                                      </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                      <div className="flex space-x-2">
                                                            <button className="cursor-pointer text-indigo-600 hover:text-indigo-900">
                                                                  <Edit size={18} />
                                                            </button>
                                                            <button onClick={() => handle_delete(user._id)} className="cursor-pointer text-red-600 hover:text-red-900">
                                                                  <Trash2 size={18} />
                                                            </button>
                                                      </div>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Users;