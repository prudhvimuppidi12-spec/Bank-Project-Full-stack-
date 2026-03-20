import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // login function
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      console.log(res.data);

      // save user + token
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("✅ Login Successful");

      navigate("/dashboard");

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
      
      <h3 className="text-center mb-3 text-primary">
        <i className="fas fa-sign-in-alt"></i> Login
      </h3>

      <input
        name="email"
        className="form-control my-2"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        className="form-control my-2"
        placeholder="Password"
        onChange={handleChange}
      />

      <button
        className="btn btn-primary w-100 mt-3"
        onClick={handleLogin}
      >
        Login
      </button>

      <p className="text-center mt-3">
        Don’t have account? <Link to="/register">Register</Link>
      </p>

    </div>
  </div>
);
}

export default Login;