import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-custom d-flex justify-content-between">
      <h4>💰 MyBank</h4>

      <div>
        <Link to="/dashboard" className="text-white mx-2">Dashboard</Link>
        <Link to="/transfer" className="text-white mx-2">Transfer</Link>
        <Link to="/transactions" className="text-white mx-2">Transactions</Link>
      </div>
    </div>
  );
}

export default Navbar;