import React from 'react'
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
import { useState, useEffect } from 'react';

const card = [
  {
    title: "Total Users",
    value: 100,
    icon: "👤",
    growth: "12% from last month",
  },
  {
    title: "Total Orders",
    value: 200,
    icon: "📦",
    growth: "10% from last month",
  },
  {
    title: "Total Revenue",
    value: "$5000",
    icon: "💰",
    growth: "8% from last month",
  },
    {
        title: "Total Products",
        value: 50,
        icon: "📦",
        growth: "5% from last month",
    },
    
];
const Dashboard = () => {
const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    axios
      .get(`${apiUrl}/auth/user/profile`, { withCredentials: true })
      .then((res) => setUser({name:res.data.name}))
      .catch((err) => console.error("Error fetching user profile", err));
  }, []);

  return (
    <div className='bg-zinc-800'>
      <div className="">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2">
          Welcome back,<span className="text-amber-300">{user.name}</span>.Here's what's happening across your departments.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {card.map((item, index) => (
          <div key={index} className="bg-zinc-700 p-4 border border-zinc-600 rounded">
            <div className=" flex justify-between items-center ">
              <div className="">
                <h2 className="font-bold">{item.title}</h2>
                <p>{item.value}</p>
              </div>
              <div className="m-2 text-2xl bg-amber-200 p-2 rounded-full">{item.icon}</div>
            </div>
            <span>{item.growth}</span>
          </div>
        ))}
      </div>
      <div className=" mt-10">
        <table className="min-w-full  bg-zinc-700 rounded-2xl shadow">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-left">Project Name</th>
                    <th className="px-4 py-2 text-left">Department</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Timeline</th>
                    <th className="px-4 py-2 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {[
                    {
                        project: "Website Redesign",
                        department: "IT",
                        status: "In Progress",
                        timeline: "2 weeks left",
                    },
                    {
                        project: "Marketing Campaign",
                        department: "Marketing",
                        status: "Completed",
                        timeline: "Finished last week",
                    },
                    {
                        project: "Inventory Audit",
                        department: "Operations",
                        status: "Pending",
                        timeline: "Starts next month",
                    },
                    {
                        project: "Mobile App Launch",
                        department: "Product",
                        status: "In Progress",
                        timeline: "1 month left",
                    },
                ].map((activity, idx) => (
                    <tr key={idx} className="border-t bg-zinc-600 border-zinc-700">
                        <td className="px-4 py-2">{activity.project}</td>
                        <td className="px-4 py-2">{activity.department}</td>
                        <td className="px-4 py-2">
                            <span
                                className={
                                    activity.status === "Completed"
                                        ? "text-green-400"
                                        : activity.status === "In Progress"
                                        ? "text-yellow-400"
                                        : "text-red-400"
                                }
                            >
                                {activity.status}
                            </span>
                        </td>
                        <td className="px-4 py-2">{activity.timeline}</td>
                        <td className="px-4 py-2">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                                View
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard
