import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";  // Avec une majuscule et "./"
import ErreurLogin from "./erreurlogin";
import Dashboardmanager from "./dashboardmanager";
import TestDash from "./testdash"; // Changer "testdash" en "TestDash" (avec une majuscule)
import KidsLandManagerDashboard from "./managerdashboard";
import Kasabahmanager from "./kasabahdashboard";
import SoussepalaceManagerDashboard from "./soussepalace";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/erreurlogin" element={<ErreurLogin />} />
        <Route path="/dashboardmanager" element={<Dashboardmanager />} />
        <Route path="/testDash" element={<TestDash />} /> {/* Corrigé ici */}
        <Route path="/managerdashboard" element={<KidsLandManagerDashboard />} />
        <Route path="/kasabahdashboard" element={<Kasabahmanager />} />
        <Route path="/soussepalace" element={<SoussepalaceManagerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
