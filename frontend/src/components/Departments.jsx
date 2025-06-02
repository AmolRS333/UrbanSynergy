import React from "react";

const Departments = () => {
  return (
    <div className="p-6">
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-6">Departments</h1>
          <p>Manage all departments in the city administration</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Department
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Departments"
        className="border p-2 mb-4 rounded-md w-1/2"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">Name</th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">City</th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">State</th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">Email</th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">Phone</th>
              <th className="py-2 px-4 border-b border-zinc-200 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-zinc-200">Department 1</td>
              <td className="py-2 px-4 border-b border-zinc-200">New York</td>
              <td className="py-2 px-4 border-b border-zinc-200">NY</td>
              <td className="py-2 px-4 border-b border-zinc-200">dept1@email.com</td>
              <td className="py-2 px-4 border-b border-zinc-200">123-456-7890</td>
              <td className="py-2 px-4 border-b border-zinc-200">
                <button className="text-blue-500 hover:underline mr-2">Edit</button>
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

export default Departments;
