import React from "react";

const Resources = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Resource cards will go here */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Resource 1</h3>
          <p className="text-gray-600">Resource details go here</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
