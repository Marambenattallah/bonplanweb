import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaTachometerAlt, FaUser, FaStore } from "react-icons/fa";

const SoussepalaceManagerDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden m-0 p-0">
      {/* Header */}
      <header className="bg-blue-600 text-white h-16 flex items-center justify-between px-4 shadow-md z-10">
        <h2 className="text-2xl font-bold">Sousse Palace</h2>
        <div className="flex gap-4 items-center">
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

      {/* Main content */}
      <main className="flex-1 pt-16">
        <iframe
          title="soussepalace"
          className="w-full h-full"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDRjYmZjMGMtMGM3ZC00NGU0LWE1YjktODhlMDAwYjY3MWMwIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </main>
    </div>
  );
};

export default SoussepalaceManagerDashboard;
