import React from "react";

const Navbar = () => {
  return (
    <div className="nav w-full font-bold bg-zinc-900 sticky top-0 z-10 text-white flex justify-end items-center p-5">
      
      <div className="navRight flex gap-7">
        <a href="#home">User</a>
        <a href="#about">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
