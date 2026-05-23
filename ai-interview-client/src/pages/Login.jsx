import { Link, useNavigate } from "react-router-dom";

import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/roles");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to start your AI interview
        </p>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>

          Don’t have an account?

          <Link
            to="/register"
            style={{
              color: "#00d9ff",
              marginLeft: "8px",
            }}
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;