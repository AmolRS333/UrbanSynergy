import React from "react";

const schedules = [
  {
    id: 1,
    dept: "Urban Development Department",
    title: "City Council Meeting",
    date: "2023-10-15",
    description: "Monthly city council meeting to discuss urban development.",
  },
  {
    id: 2,
    dept: "Community Services Department",
    title: "Community Clean-Up Day",
    date: "2023-10-20",
    description: "A day dedicated to cleaning up local parks and streets.",
  },
  {
    id: 3,
    dept: "Public Safety Department",
    title: "Public Safety Workshop",
    date: "2023-10-25",
    description:
      "Workshop on public safety measures and emergency preparedness.",
  },
];
const tasks = [
  {
    id: 1,
    dept: "Urban Development Department",
    title: "Park Renovation",
    date: "2023-10-18",
    description: "Renovation of the central park to improve facilities.",
  },
  {
    id: 2,
    dept: "Community Services Department",
    title: "Food Drive",
    date: "2023-10-22",
    description: "Organizing a food drive for local families in need.",
  },
  {
    id: 3,
    dept: "Public Safety Department",
    title: "Fire Drill",
    date: "2023-10-30",
    description: "Conducting a fire drill at the community center.",
  },
];
const Scheduling = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Scheduling</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6 ">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          {/* Calendar component will go here */}
          <div className="h-64 bg-gray-100 w-full m-2 rounded flex items-center justify-center">
            <p className="text-gray-500">Calendar Component Placeholder</p>

          </div>
          <div className="flex gap-5 w-full">
            <select name="departments" className="border p-2 rounded flex-1 ">
              <option value="">All Department</option>
              <option value="hr">Municipal Corporation</option>
              <option value="engineering">Water Department</option>
              <option value="marketing">Road Authority</option>
              <option value="marketing">Electricity Board</option>
              <option value="marketing">Traffic Department</option>
              <option value="marketing">Urban Development Department</option>
            </select>
            <select name="projects" className="border p-2 rounded flex-1 ">
              <option value="">All Projects</option>
              <option value="hr">Park Renovation</option>
              <option value="engineering">Food Drive</option>
              <option value="marketing">Fire Drill</option>
              
            </select>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          {/* Events list will go here */}
          <div className="space-y-4 bg-zinc-200 p-4 rounded-md mb-4">
            <h1 className="font-bold text-2xl">Meetings</h1>
            {schedules.map((schedule) => (
              <div key={schedule.id} className="bg-gray-50 p-4 rounded shadow">
                <h3 className="text-lg font-semibold">{schedule.dept}</h3>
                <h3 className="text-lg font-semibold">{schedule.title}</h3>
                <p className="text-gray-600">{schedule.date}</p>
                <p className="text-gray-500">{schedule.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 bg-zinc-200 p-4 rounded-md">
            <h1 className="font-bold text-2xl">Tasks</h1>

            {tasks.map((task) => (
              <div key={task.id} className="bg-gray-50 p-4 rounded shadow">
                <h3 className="text-lg font-semibold">{task.dept}</h3>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.date}</p>
                <p className="text-gray-500">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
