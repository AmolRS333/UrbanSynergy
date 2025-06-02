import React from "react";

const Users = () => {
  return (
    <div className="p-6">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-6">Users</h1>
          <p>Manage all users in the city administration</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add User
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Users"
        className="border p-2 mb-4 rounded-md w-1/2"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">
                Username
              </th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">
                Email
              </th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">
                Department
              </th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">
                Role
              </th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-zinc-200">
                John Doe
              </td>
              <td className="py-2 px-4 border-b border-zinc-200">
                johndoe
              </td>
              <td className="py-2 px-4 border-b border-zinc-200">
                johndoe@email.com
              </td>
              <td className="py-2 px-4 border-b border-zinc-200">
                Public Works
              </td>
              <td className="py-2 px-4 border-b border-zinc-200">
                Admin
              </td>
              <td className="py-2 px-4 border-b border-zinc-200">
                <button className="text-blue-500 hover:underline mr-2">
                  Edit
                </button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
