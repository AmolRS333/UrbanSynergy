import React from "react";

const Settings = () => {
  return (
    <div className="space-y-6 m-5">
      <div className="">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500">
          Manage your account settings and application preferences
        </p>
      </div>

      <div className="w-full  max-w-md">
        <div className="flex border-b mb-6">
          <button className="flex-1 py-2 font-medium border-b-2 border-blue-600 text-blue-600">
            Account
          </button>
          <button className="flex-1 py-2 font-medium text-gray-500">
            Notifications
          </button>
          <button className="flex-1 py-2 font-medium text-gray-500">
            Appearance
          </button>
        </div>
      </div>

      {/* Account Tab */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
              U
            </div>
            <div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Upload New Image
              </button>
              <p className="text-xs text-gray-400 mt-1">
                JPG, GIF or PNG. Max size of 2MB.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                className="w-full border rounded px-3 py-2"
                defaultValue="User Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                className="w-full border rounded px-3 py-2"
                defaultValue="username"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                className="w-full border rounded px-3 py-2"
                type="email"
                defaultValue="user@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Designation</label>
              <input
                className="w-full border rounded px-3 py-2"
                defaultValue="Member"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Current Password
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                type="password"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">New Password</label>
              <input
                className="w-full border rounded px-3 py-2"
                type="password"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                type="password"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Tab */}
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Email Notifications</h3>
            <div className="border-b my-2" />
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Project Updates</p>
                <p className="text-sm text-gray-400">
                  Receive emails when projects are updated
                </p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Resource Requests</p>
                <p className="text-sm text-gray-400">
                  Get notified about new resource requests
                </p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Meeting Invitations</p>
                <p className="text-sm text-gray-400">
                  Receive emails about meeting invites
                </p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Forum Activity</p>
                <p className="text-sm text-gray-400">
                  Get notified about replies to your discussions
                </p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">System Notifications</h3>
            <div className="border-b my-2" />
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Site Conflict Alerts</p>
                <p className="text-sm text-gray-400">
                  Real-time alerts for project site conflicts
                </p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Task Assignments</p>
                <p className="text-sm text-gray-400">
                  Get notified when tasks are assigned to you
                </p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Digest</p>
                <p className="text-sm text-gray-400">
                  Receive a weekly summary of activities
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Preferences
          </button>
        </div>
      </div>

      {/* Appearance Tab */}
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Theme</h3>
            <div className="border-b my-2" />
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-md p-4 flex flex-col items-center space-y-2 bg-white border-blue-600">
                <div className="h-12 w-full bg-white border rounded"></div>
                <span className="text-sm font-medium">Light</span>
              </div>
              <div className="border rounded-md p-4 flex flex-col items-center space-y-2">
                <div className="h-12 w-full bg-gray-800 border rounded"></div>
                <span className="text-sm font-medium">Dark</span>
              </div>
              <div className="border rounded-md p-4 flex flex-col items-center space-y-2">
                <div className="h-12 w-full bg-gradient-to-b from-white to-gray-800 border rounded"></div>
                <span className="text-sm font-medium">System</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Layout</h3>
            <div className="border-b my-2" />
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Compact Mode</p>
                <p className="text-sm text-gray-400">
                  Use less space between elements
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sidebar Always Visible</p>
                <p className="text-sm text-gray-400">
                  Keep the sidebar expanded on small screens
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Accessibility</h3>
            <div className="border-b my-2" />
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">High Contrast Mode</p>
                <p className="text-sm text-gray-400">
                  Increase contrast for better readability
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Larger Text</p>
                <p className="text-sm text-gray-400">
                  Increase text size throughout the application
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
