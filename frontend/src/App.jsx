import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Content />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
