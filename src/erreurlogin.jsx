import React from "react";
import { useNavigate } from "react-router-dom";

const ErreurLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Vérifiez vos données s'il vous plaît</h1>
      <p className="text-gray-700 mb-6 font-bold">Les informations de connexion sont incorrectes.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Retour à la connexion
      </button>
    </div>
  );
};

export default ErreurLogin;
