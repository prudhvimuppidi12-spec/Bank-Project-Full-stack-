import axios from "axios";
import { useState } from "react";

function KYC() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleKYC = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/account/kyc",
        {
          userId: user._id
        }
      );

      // update localStorage + UI
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);

      alert("✅ KYC Verified Successfully");
    } catch (err) {
      console.error(err);
      alert("❌ KYC Failed");
    }
  };

  return (
    <div className="container mt-4">
      <h3>KYC Verification</h3>

      <p><b>PAN:</b> {user.pan}</p>
      <p><b>Aadhaar:</b> {user.aadhaar}</p>

      <p>
        <b>Status:</b>{" "}
        {user.kycVerified ? (
          <span className="text-success">Verified ✅</span>
        ) : (
          <span className="text-danger">Not Verified ❌</span>
        )}
      </p>

      {!user.kycVerified && (
        <button className="btn btn-primary" onClick={handleKYC}>
          Verify KYC
        </button>
      )}
    </div>
  );
}

export default KYC;