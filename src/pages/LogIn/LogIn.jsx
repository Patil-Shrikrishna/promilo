import React, { useState } from "react";
import "./login.css";
import pro from "../../assets/pro.png";
import { loginValidationSchema } from "../../utils/validation";
import { hashPassword } from "../../utils";
import { login } from "../../api/login";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    grant_type: "password",
  });
  const [error, setError] = useState("");
  const validateInput = async () => {
    try {
      await loginValidationSchema.validateAt("username", form);
      await loginValidationSchema.validate(form);
      setError("");
    } catch (e) {
      setError(e?.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateInput();
  };
  const handleLogin = async () => {
    console.log(form);
    try {
      validateInput();
      const payload = { ...form, password: hashPassword(form.password) };
      await login(payload);
      navigate("/products");
    } catch (e) {
      setError(e?.message);
    }
  };
  return (
    <div className="login-main-container">
      <div className="login-container">
        <img src={pro} className="logo-login" />
        <h3 className="heading-login">Log In</h3>
        <input
          type="email"
          className="login-input"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          className="login-input"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};
export default LogIn;
