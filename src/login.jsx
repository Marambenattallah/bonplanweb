import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logoo from "./assets/finale.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      navigate("/erreur-login");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3000/user/login-admin", {
        email,
        password,
      });
      console.log("Réponse API :", response.data);
  
      const { token, role } = response.data;
  
      if (role === "admin") {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else if (role === "manager") {
        localStorage.setItem("token", token);
        navigate("/dashboardmanager"); // Page spéciale pour le manager
      } else {
        navigate("/erreurlogin");
      }
    } catch (err) {
      navigate("/erreurlogin");
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
