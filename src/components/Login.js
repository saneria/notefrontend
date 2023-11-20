import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

const Login = ({ loginUser, loading, error }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(credentials);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" value={credentials.email} onChange={handleInputChange} required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleInputChange} required />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
