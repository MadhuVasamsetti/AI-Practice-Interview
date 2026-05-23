import { Link, useNavigate } from "react-router-dom";

import "../styles/login.css";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    navigate("/roles");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Create Account
        </h1>

        <p>
          Start practicing interviews with AI
        </p>

        <form
          className="auth-form"
          onSubmit={handleRegister}
        >

          <input
            type="text"
            placeholder="Enter Name"
            required
          />

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
            Register
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>

          Already have account?

          <Link
            to="/login"
            style={{
              color: "#00d9ff",
              marginLeft: "8px",
            }}
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;