import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="glass fixed top-0 left-0 w-full z-50 px-10 py-5 flex items-center justify-between">
      
      <h1 className="text-2xl font-bold text-white">
        AI Interview
      </h1>

      <div className="flex items-center gap-8 text-white">

        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-cyan-400 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/analytics"
          className="hover:text-cyan-400 transition"
        >
          Analytics
        </Link>

        <Link
          to="/login"
          className="primary-btn"
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;