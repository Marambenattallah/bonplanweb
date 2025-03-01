import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom"; // Import pour la redirection
import "./index.css";
import logoo from "./assets/finale.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook pour la redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/login-admin", {
        email,
        password,
      });

      const { token, role } = response.data;
      
      // Vérifier si l'utilisateur est un admin
      if (role === "admin") {
        localStorage.setItem("token", token); // Stocker le token
        navigate("/dashboard"); // Rediriger vers le tableau de bord admin
      } else {
        setError("Accès refusé. Vous n'êtes pas administrateur.");
      }
    } catch (err) {
      setError("Identifiants incorrects ou erreur serveur.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side: Image */}
      <div className="w-1/2 bg-gray-200 flex justify-center items-center">
        <img src={logoo} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Right side: Form */}
      <div className="w-1/2 flex justify-center items-center bg-white p-8">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login Admin</h2>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
