import "../styles/interview.css";

function Interview() {
  return (
    <div className="interview-page">

      <div className="interview-container">

        <div className="question-box">

          <h1>
            Tell me about React Hooks?
          </h1>

          <p>
            Explain how hooks work in React
            and why they are useful.
          </p>

        </div>

        <div className="voice-section">

          <button className="mic-btn">
            🎤
          </button>

        </div>

        <div className="answer-box">

          Your answer will appear here...

        </div>

      </div>

    </div>
  );
}

export default Interview;