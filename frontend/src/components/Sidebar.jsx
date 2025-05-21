import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar bg-zinc-900 h-[100vh] text-white w-64 lg:w-1/5 flex flex-col items-start sticky top-0">
      <div className="flex items-center gap-5 m-6 text-xl font-bold">
        <i className="fa-solid fa-helmet-safety"></i>
        <h2>UrbanSync</h2>
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start w-full border-t border-zinc-700">
          <h2 className="m-4 font-bold">Main Menu</h2>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/scheduling"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Scheduling
          </NavLink>
        </div>
        <div className="flex flex-col items-start justify-start w-full border-t border-zinc-700">
          <h2 className="m-4 font-bold">Settings</h2>
          <NavLink
            to="/departments"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Departments
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `py-2 px-4 w-full hover:bg-zinc-800 ${
                isActive ? "bg-zinc-800" : ""
              }`
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
