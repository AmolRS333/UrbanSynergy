import React from "react";

const cards = [
  {
    id: 1,
    title: "Urban Park Development",
    prj_id: "prj-2023-001",
    status: "In Progress",
    description:
      "A project to develop a new urban park in the city center, including green spaces, walking paths, and recreational areas.",
    department: "Urban Development Department",
    startDate: "2023-01-15",
    endDate: "2024-01-15",
    budget: "$500,000",
  },
  {
    id: 2,
    title: "Urban Park Development",
    prj_id: "prj-2023-001",
    status: "In Progress",
    description:
      "A project to develop a new urban park in the city center, including green spaces, walking paths, and recreational areas.",
    department: "Urban Development Department",
    startDate: "2023-01-15",
    endDate: "2024-01-15",
    budget: "$500,000",
  },
  {
    id: 3,
    title: "Urban Park Development",
    prj_id: "prj-2023-001",
    status: "In Progress",
    description:
      "A project to develop a new urban park in the city center, including green spaces, walking paths, and recreational areas.",
    department: "Urban Development Department",
    startDate: "2023-01-15",
    endDate: "2024-01-15",
    budget: "$500,000",
  },
  {
    id: 4,
    title: "Urban Park Development",
    prj_id: "prj-2023-001",
    status: "In Progress",
    description:
      "A project to develop a new urban park in the city center, including green spaces, walking paths, and recreational areas.",
    department: "Urban Development Department",
    startDate: "2023-01-15",
    endDate: "2024-01-15",
    budget: "$500,000",
  },
];

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <p className="text-gray-700 mb-4">
        View and manage all projects across departments
      </p>
      <div className="bg-zinc-50 rounded-md p-4">
        <div className="flex flex-col md:flex-row md:items-center  gap-4 mb-6">
          <input
            type="text"
            className="border p-2 rounded flex-1 min-w-1/2"
            placeholder="Search Projects..."
          />
          <select
            name="departments"
            className="border p-2 rounded flex-1 min-w-[180px]"
          >
            <option value="">All Department</option>
            <option value="hr">Municipal Corporation</option>
            <option value="engineering">Water Department</option>
            <option value="marketing">Road Authority</option>
            <option value="marketing">Electricity Board</option>
            <option value="marketing">Traffic Department</option>
            <option value="marketing">Urban Development Department</option>
          </select>
          <select
            name="status"
            className="border p-2 rounded flex-1 min-w-[180px]"
          >
            <option value="">All Status</option>
            <option value="hr">Planning</option>
            <option value="engineering">In Progress</option>
            <option value="marketing">Approved</option>
            <option value="marketing">Completed</option>
            <option value="marketing">On Hold</option>
            <option value="marketing">Cancelled</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <div className="flex bg-neutral-100 rounded-md p-1">
            <button
              className="px-3 py-1 rounded-md flex items-center bg-white shadow-sm"
              type="button"
            >
              <span className="material-icons text-sm mr-1">view_list</span>
              <span>List</span>
            </button>
            <button
              className="px-3 py-1 rounded-md flex items-center"
              type="button"
            >
              <span className="material-icons text-sm mr-1">map</span>
              <span>Map</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 text-sm">
        {cards.map((card) => (
          <div key={card.id} className="bg-zinc-50 rounded-md p-5 py-4">
            <div className="grid-rows-1 items-start justify-between mb-4">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-500 mb-2">
                <strong>Project ID:</strong> {card.prj_id}
              </p>
              <span className="text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
                {card.status}
              </span>
            </div>
            <div className="grid-rows-1 space-y-2">
              <p className="text-gray-600 mb-2">{card.description}</p>
              <p className="text-gray-500">
                <strong>Department:</strong> {card.department}
              </p>
              <p className="text-gray-500">
                <strong>Start Date:</strong> {card.startDate}
              </p>
              <p className="text-gray-500">
                <strong>End Date:</strong> {card.endDate}
              </p>
              <p className="text-gray-500">
                <strong>Budget:</strong> {card.budget}
              </p>
            </div>
            <button className="mt-2 w-full px-4 py-2 bg-zinc-100 text-black rounded hover:bg-zinc-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
