import React from "react";

const Departments = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Department cards will go here */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Department 1</h3>
          <p className="text-gray-600">Department details and team members</p>
        </div>
      </div>
    </div>
  );
};

export default Departments;
