import { useNavigate } from "react-router-dom";

import "../styles/hero.css";

function HeroSection() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>

          Crack Your Next
          <span className="gradient-text">
            {" "}AI Interview
          </span>

        </h1>

        <p>

          Practice real interview questions with AI,
          improve communication skills,
          get instant feedback,
          and prepare for your dream job.

        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/login")}
          >
            Start Practice
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;