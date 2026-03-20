import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    pan: "",
    aadhaar: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Register function
  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      console.log(res.data);

      alert("✅ Registered Successfully");
      navigate("/"); // login page ki redirect
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert("❌ " + error.response.data);
      } else {
        alert("❌ Server error");
      }
    }
  };

  return (
  <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow col-md-4">

      <h3 className="text-center mb-3 text-success">
        <i className="fas fa-user-plus"></i> Register
      </h3>

      <input name="name" className="form-control my-2"
        placeholder="Name" onChange={handleChange} />

      <input name="email" className="form-control my-2"
        placeholder="Email" onChange={handleChange} />

      <input name="password" type="password"
        className="form-control my-2"
        placeholder="Password" onChange={handleChange} />

      <input name="pan" className="form-control my-2"
        placeholder="PAN" onChange={handleChange} />

      <input name="aadhaar" className="form-control my-2"
        placeholder="Aadhaar" onChange={handleChange} />

      <button className="btn btn-success w-100 mt-3"
        onClick={handleRegister}>
        Register
      </button>

      <p className="text-center mt-3">
        Already have account? <Link to="/">Login</Link>
      </p>

    </div>
  </div>
);
}

export default Register;