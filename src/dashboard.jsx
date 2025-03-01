import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprimer le token
    navigate("/"); // Redirection vers login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Bienvenue sur le Tableau de Bord Admin</h1>
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
        Déconnexion
      </button>
    </div>
  );
};

export default Dashboard;
