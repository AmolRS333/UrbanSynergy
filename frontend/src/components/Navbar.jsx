import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let [message, setMessage] = React.useState("");
  const navigate = useNavigate();
  const handellLogout = () => {
      axios
      .post(`${apiUrl}/auth/user/logout`)
      .then((response) => {
        setMessage(response.data.message);
        navigate("/login");

      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  }
  return (
    <div className="nav w-full font-bold bg-zinc-900 sticky top-0 z-10 text-white flex justify-end items-center p-5">
      
      <div className="navRight flex gap-7">
        <a href="#home">User</a>
        <button onClick={handellLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
