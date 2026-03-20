import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h4 className="text-white text-center mb-4">💰 MyBank</h4>

      <NavLink to="/dashboard">
        <i className="fas fa-home me-2"></i> Dashboard
      </NavLink>

      <NavLink to="/transfer">
        <i className="fas fa-exchange-alt me-2"></i> Transfer
      </NavLink>

      <NavLink to="/transactions">
        <i className="fas fa-list me-2"></i> Transactions
      </NavLink>

      <NavLink to="/notifications">
        <i className="fas fa-bell me-2"></i> Notifications
      </NavLink>

      <NavLink to="/kyc">
        <i className="fas fa-id-card me-2"></i> KYC
      </NavLink>

      <button
        className="btn btn-danger w-75 m-3"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        <i className="fas fa-sign-out-alt me-2"></i> Logout
      </button>
    </div>
  );
}

export default Sidebar;