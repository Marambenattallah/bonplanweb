import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {  FaTachometerAlt, FaUser, FaStore } from "react-icons/fa";

const Dashboardmanager = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprimer le token
    navigate("/"); // Redirection vers login
  };

  return (
    <div className="flex h-screen bg-blue-100">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-md w-64 p-5 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}> 
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-blue-600 ml-20">BonPlan</h2>
          <AiOutlineClose size={24} className="cursor-pointer" onClick={() => setSidebarOpen(false)} />
        </div>
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </li>
          
          <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded">
            <FaStore className="mr-2" /> Avis Shop
          </li>
          
        </ul>
        <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Déconnexion
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="absolute top-5 left-5 cursor-pointer">
          <FiMenu size={30} onClick={() => setSidebarOpen(true)} />
        </div>
        <div className="flex flex-col items-center mt-10">
 
  <h1 className="text-3xl font-bold text-center">Bienvenue sur le Tableau de Bord Manager</h1>
</div>
      </div>
    </div>
  );
};

export default Dashboardmanager;
