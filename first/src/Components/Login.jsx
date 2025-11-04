import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ added
import "../assets/Images/Styles/Login.css";

export default function Login({ onLoginSuccess }) {
  const [mode, setMode] = useState("login"); // "login" | "Sign In" | "forgot"
  const navigate = useNavigate();             // ✅ hook for navigation

  // login form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register form states
  const [form, setForm] = useState({
    firstName: "", lastName: "", address: "", landmark: "",
    pincode: "", phone: "", password: ""
  });

  // forgot password
  const [resetEmail, setResetEmail] = useState("");

  // login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();      // ✅ update parent state
      navigate("/");         // ✅ direct Home page pe redirect
    } else {
      alert("Please enter email/phone and password");
    }
  };

  // Sign In handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    if (Object.values(form).every(v => v)) {
      alert("✅ Registration Successful!");
      setMode("login");
    } else {
      alert("Please fill all fields");
    }
  };

  // forgot password handler
  const handleReset = (e) => {
    e.preventDefault();
    if (resetEmail) {
      alert("📩 Reset link sent to your email/phone!");
      setMode("login");
    } else {
      alert("Enter your registered email/phone");
    }
  };

  return (
    <div className="login-wrapper fade-in">
      <div className="login-card">
        {mode === "login" && (
          <>
            <h2 className="login-title">Welcome to <span>Ramaya</span></h2>
            <p className="login-subtitle">Please sign in to continue</p>

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label>Email / Phone</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email or phone"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>

              <div className="form-options">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <span className="link" onClick={() => setMode("forgot")}>
                  Forgot Password?
                </span>
              </div>

              <button type="submit" className="btn">Login</button>
            </form>

            <p className="SignIn-text">
              New here?{" "}
              <span className="link" onClick={() => setMode("SignIn")}>
                Create an account
              </span>
            </p>
          </>
        )}

        {mode === "SignIn" && (
          <>
            <h2 className="login-title">Sign In</h2>
            <form onSubmit={handleSignIn} className="login-form">
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
              <input name="address" placeholder="Full Address" value={form.address} onChange={handleChange} />
              <input name="landmark" placeholder="Landmark" value={form.landmark} onChange={handleChange} />
              <input name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
              <button type="submit" className="btn">Sign In</button>
            </form>
            <p className="link" onClick={() => setMode("login")}>Back to Login</p>
          </>
        )}

        {mode === "forgot" && (
          <>
            <h2 className="login-title">Forgot Password</h2>
            <form onSubmit={handleReset} className="login-form">
              <input
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Enter registered email/phone"
              />
              <button type="submit" className="btn">Send Reset Link</button>
            </form>
            <p className="link" onClick={() => setMode("login")}>Back to Login</p>
          </>
        )}
      </div>
    </div>
  );
}
