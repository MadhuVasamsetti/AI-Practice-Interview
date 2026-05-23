import "../styles/features.css";

function Features() {
  return (
    <section
      id="features"
      className="features"
    >

      <h1 className="features-title">
        Features
      </h1>

      <div className="features-grid">

        <div className="feature-card">

          <h2>
            AI Questions
          </h2>

          <p>
            AI generates interview questions
            based on selected role.
          </p>

        </div>

        <div className="feature-card">

          <h2>
            Voice Answers
          </h2>

          <p>
            Speak answers naturally using
            microphone support.
          </p>

        </div>

        <div className="feature-card">

          <h2>
            AI Evaluation
          </h2>

          <p>
            AI checks technical correctness
            and communication.
          </p>

        </div>

        <div className="feature-card">

          <h2>
            Instant Feedback
          </h2>

          <p>
            Get suggestions and corrections
            immediately.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;