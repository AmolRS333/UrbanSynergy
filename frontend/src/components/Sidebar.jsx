import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-zinc-900 h-[100vh] text-white w-1/5  flex flex-col items-start sticky top-0">
      <div className="flex items-center gap-5 m-6 text-xl font-bold">
        <i className="fa-solid fa-helmet-safety"></i>
        <h2>UrbanSync</h2>
      </div>
      <div className=" w-full flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start w-full border-t border-zinc-700">
          <h2 className="m-4 font-bold">Main Menu</h2>
          <a href="#home" className="py-2 px-4 w-full hover:bg-zinc-800">
            Dashboard
          </a>
          <a href="#home" className="py-2 px-4 w-full hover:bg-zinc-800">
            Projects
          </a>
          <a href="#about" className="py-2 px-4 w-full hover:bg-zinc-800">
            Resources
          </a>
          <a href="#contact" className="py-2 px-4 w-full hover:bg-zinc-800">
            Scheduling
          </a>
        </div>
        <div className="flex flex-col items-start justify-start w-full border-t border-zinc-700">
          <h2 className="m-4 font-bold">Settings</h2>
          <a href="#home" className="py-2 px-4 w-full hover:bg-zinc-800">
            Departments
          </a>
          <a href="#about" className="py-2 px-4 w-full hover:bg-zinc-800">
            Users
          </a>
          <a href="#contact" className="py-2 px-4 w-full hover:bg-zinc-800">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
