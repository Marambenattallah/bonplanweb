import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaTachometerAlt, FaUser, FaStore } from "react-icons/fa";

const Kasabahmanager = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen bg-blue-100 overflow-hidden">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center fixed top-0 left-0 z-10 shadow-md h-16">
        <h2 className="text-2xl font-bold">Al Kasabah</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="hover:bg-blue-500 p-2 rounded-md"
          >
            <FaTachometerAlt size={20} />
          </button>
          <button
            onClick={() => navigate("/users")}
            className="hover:bg-blue-500 p-2 rounded-md"
          >
            <FaUser size={20} />
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="hover:bg-blue-500 p-2 rounded-md"
          >
            <FaStore size={20} />
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Déconnexion
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <iframe
          title="kasbah"
          className="w-full h-full"
          src="https://app.powerbi.com/view?r=eyJrIjoiOGQ4ZTFiMTUtZWRjOS00NzNkLWIxMmItMDI5NGQzZDIzZmYxIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </main>
    </div>
  );
};

export default Kasabahmanager;
