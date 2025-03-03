import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard"  // Avec une majuscule et "./"
import ErreurLogin from "./erreurlogin";
import Dashboardmanager from "./dashboardmanager";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/erreurlogin" element={<ErreurLogin/>}/>
      <Route path="/dashboardmanager" element={<Dashboardmanager/>}/>

      </Routes>
    </Router>
  );
}

export default App;
