import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">Resources</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
            <p className="text-neutral-500">
              View available resources across all departments
            </p>
            <div className="mt-2 sm:mt-0 space-x-2 flex">
              <button className="border border-neutral-300 rounded px-4 py-2 flex items-center text-neutral-700 bg-white hover:bg-neutral-100">
                <span className="material-icons text-sm mr-1">add_task</span>
                <span>Request Resource</span>
              </button>
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white rounded px-4 py-2 flex items-center">
                <span className="material-icons text-sm mr-1">add</span>
                <span>Add Resource</span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 flex border-b border-neutral-200">
            <button className="px-4 py-2 text-secondary-600 border-b-2 border-secondary-500 font-medium">Resources</button>
            <button className="px-4 py-2 text-neutral-500">Resource Requests</button>
          </div>

          {/* Resources Tab */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-neutral-400">search</span>
                    <input
                      placeholder="Search resources..."
                      className="w-full pl-10 border border-neutral-200 rounded py-2"
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <select className="w-full border border-neutral-200 rounded py-2 px-3 text-neutral-700" disabled>
                    <option>All Resource Types</option>
                    <option>Equipment</option>
                    <option>Manpower</option>
                    <option>Vehicles</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border border-neutral-200 rounded py-2 px-3 text-neutral-700" disabled>
                    <option>All Departments</option>
                    <option>Department 1</option>
                    <option>Department 2</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Resource 1</h3>
                <p className="text-gray-600">Resource details go here</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Resource 2</h3>
                <p className="text-gray-600">Resource details go here</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Resource 3</h3>
                <p className="text-gray-600">Resource details go here</p>
              </div>
            </div>
          </div>

          {/* Resource Requests Tab */}
          <div className="bg-white rounded-lg shadow-sm mt-10">
            <div className="px-6 py-4 border-b border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-800">Resource Requests</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 text-left">
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Resource Name</th>
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Requested By</th>
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Owner Dept</th>
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Dates</th>
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="font-medium text-neutral-800">Resource 1</div>
                      <div className="text-sm text-neutral-500">Equipment</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">Department 1</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">Department 2</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">5</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">01/01/2024 - 01/05/2024</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-secondary-600 hover:underline">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="font-medium text-neutral-800">Resource 2</div>
                      <div className="text-sm text-neutral-500">Manpower</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">Department 3</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">Department 1</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">2</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">02/10/2024 - 02/12/2024</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">Pending</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-secondary-600 hover:underline">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="font-medium text-neutral-800">Resource 3</div>
                      <div className="text-sm text-neutral-500">Vehicle</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">Department 2</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">Department 3</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">1</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">03/15/2024 - 03/20/2024</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Completed</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-secondary-600 hover:underline">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
