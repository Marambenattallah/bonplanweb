import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";  // Avec une majuscule et "./"
import ErreurLogin from "./erreurlogin";
import Dashboardmanager from "./dashboardmanager";
import TestDash from "./testdash"; // Changer "testdash" en "TestDash" (avec une majuscule)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/erreurlogin" element={<ErreurLogin />} />
        <Route path="/dashboardmanager" element={<Dashboardmanager />} />
        <Route path="/testDash" element={<TestDash />} /> {/* Corrigé ici */}
      </Routes>
    </Router>
  );
}

export default App;
