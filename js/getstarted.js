// GetStarted.jsx  (replaces the get-started HTML page - markup only)
import { Link } from "react-router-dom";
import "../css/login.css"; // <- adjust so it points to your existing css/login.css
import useGetStarted from "../js/getstarted"; // <- adjust so it points to your getstarted.js

export default function GetStarted() {
  const { form, handleChange, handleCreateAccount, submitting } = useGetStarted();

  return (
    <>
      <nav>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>

      <div className="main">
        <h3>Create Your Profile</h3>

        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={form.Name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Age"
          placeholder="Age"
          value={form.Age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={form.Username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="createButton" onClick={handleCreateAccount} disabled={submitting}>
          Create Account
        </button>

        <hr />

        <button>
          <i className="fa-brands fa-google"></i>
        </button>
        <button>
          <i className="fa-brands fa-github"></i>
        </button>
      </div>
    </>
  );
}
