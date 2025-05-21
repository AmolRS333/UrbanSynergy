import React from "react";

const Scheduling = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Scheduling</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          {/* Calendar component will go here */}
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            Calendar View
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          {/* Events list will go here */}
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium">Event 1</h3>
              <p className="text-gray-600">Event details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
