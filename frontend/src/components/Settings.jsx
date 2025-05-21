import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Dark Mode</label>
                <button className="bg-gray-200 rounded-full p-1 w-12 h-6 relative">
                  <span className="absolute left-1 top-1 bg-white rounded-full w-4 h-4"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Notifications</label>
                <button className="bg-gray-200 rounded-full p-1 w-12 h-6 relative">
                  <span className="absolute left-1 top-1 bg-white rounded-full w-4 h-4"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
