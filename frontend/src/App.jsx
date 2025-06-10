import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Login from "./components/login.jsx";
import axios from "axios";
import Dashboard from "./components/Dashboard.jsx";

const api =  "http://localhost:3000";

function App() {
  axios.get(`${api}/`)
    .then(response => {
      console.log("API is reachable:", response.data);
    })
    .catch(error => {
      console.error("Error reaching API:", error);
    });

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add other routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
