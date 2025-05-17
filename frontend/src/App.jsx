import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
const App = () => {
  return (
    <div className="main  w-full flex bg-zinc-800 ">
     <Sidebar />
     <Main />
    </div>
  );
};

export default App;
