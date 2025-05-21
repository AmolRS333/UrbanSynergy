import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Resources from "./Resources";
import Scheduling from "./Scheduling";
import Departments from "./Departments";
import Users from "./Users";
import Settings from "./Settings";

const Content = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Content;
