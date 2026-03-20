import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import KYC from "./pages/KYC";
import Loans from "./pages/Loans";
import Notifications from "./pages/Notifications";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chatbot from "./components/Chatbot";

function Layout() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const hideLayout =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {/* Navbar & Sidebar */}
      {user && !hideLayout && <Navbar />}
      {user && !hideLayout && <Sidebar />}

      {/* Main Content */}
      <div className={!hideLayout ? "main" : ""}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>

      {/* 🔥 CHATBOT (VERY IMPORTANT POSITION) */}
      {user && !hideLayout && <Chatbot />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;