import { useNavigate } from "react-router-dom";

import "../styles/roleSelection.css";

function RoleSelection() {

  const navigate = useNavigate();

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Full Stack Developer",
    "Python Developer",
  ];

  const handleRole = (role) => {

    localStorage.setItem("role", role);

    navigate("/interview");
  };

  return (
    <div className="role-page">

      <h1>
        Choose Interview Role
      </h1>

      <p>
        Select your preferred job role
      </p>

      <div className="roles-grid">

        {roles.map((role, index) => (

          <div
            key={index}
            onClick={() => handleRole(role)}
            className="role-card"
          >

            <h2>
              {role}
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RoleSelection;