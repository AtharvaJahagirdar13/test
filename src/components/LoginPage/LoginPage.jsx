 /*import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("login"); // login, signup, forgotPassword

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login" || formType === "signup") {
    
      const salt = bcrypt.genSaltSync(4);
      const hashedPassword = bcrypt.hashSync(password, salt);
      console.log("Email:", email);
      console.log("Hashed Password:", hashedPassword);
      console.log("Original Password:-",password);

      alert(`${formType === "login" ? "Logging in" : "Signing up"}...`);
      if (formType === "login") {
        navigate("/");  // Redirect to home after login
      }
      
    } else if (formType === "forgotPassword") {
      console.log("Email for password reset:", email);
      alert("Password reset link sent to email.");
    }
  };

  const handleFormSwitch = (type) => {
    setFormType(type);
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h2>{formType === "login" ? "Login" : formType === "signup" ? "Sign Up" : "Forgot Password"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {formType !== "forgotPassword" && (
          <div style={styles.inputContainer}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
        )}
        <button type="submit" style={styles.button}>
          {formType === "login" ? "Login" : formType === "signup" ? "Sign Up" : "Reset Password"}
        </button>
      </form>

      <div style={styles.footer}>
        {formType === "login" && (
          <>
            <p>
              Don't have an account?{" "}
              <span style={styles.link} onClick={() => handleFormSwitch("signup")}>
                Sign up
              </span>
            </p>
            <p>
              Forgot your password?{" "}
              <span style={styles.link} onClick={() => handleFormSwitch("forgotPassword")}>
                Reset password
              </span>
            </p>
          </>
        )}
        {formType === "signup" && (
          <p>
            Already have an account?{" "}
            <span style={styles.link} onClick={() => handleFormSwitch("login")}>
              Login
            </span>
          </p>
        )}
        {formType === "forgotPassword" && (
          <p>
            Remembered your password?{" "}
            <span style={styles.link} onClick={() => handleFormSwitch("login")}>
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
*/
import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("login"); // login, signup, forgotPassword
  
  const navigate = useNavigate();  // Initialize navigate
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formType === "login" || formType === "signup") {
      const salt = bcrypt.genSaltSync(4);
      const hashedPassword = bcrypt.hashSync(password, salt);
      console.log("Email:", email);
      console.log("Hashed Password:", hashedPassword);
      console.log("Original Password:", password);
      

      // Simulate successful login or signup
      alert(`${formType === "login" ? "Logging in" : "Signing up"}...`);

      // Redirect to the home page after login or signup
      if (formType === "login") {
        navigate("/");  // Redirect to home after login
      }
    } else if (formType === "forgotPassword") {
      console.log("Email for password reset:", email);
      alert("Password reset link sent to email.");
    }
  };

  const handleFormSwitch = (type) => {
    setFormType(type);
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h2>{formType === "login" ? "Login" : formType === "signup" ? "Sign Up" : "Forgot Password"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {formType !== "forgotPassword" && (
          <div style={styles.inputContainer}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
        )}
        <button type="submit" style={styles.button}>
          {formType === "login" ? "Login" : formType === "signup" ? "Sign Up" : "Reset Password"}
        </button>
      </form>

      <div style={styles.footer}>
        {formType === "login" && (
          <>
            <p>
              Don't have an account?{" "}
              <span style={styles.link} onClick={() => handleFormSwitch("signup")}>
                Sign up
              </span>
            </p>
            <p>
              Forgot your password?{" "}
              <span style={styles.link} onClick={() => handleFormSwitch("forgotPassword")}>
                Reset password
              </span>
            </p>
          </>
        )}
        {formType === "signup" && (
          <p>
            Already have an account?{" "}
            <span style={styles.link} onClick={() => handleFormSwitch("login")}>
              Login
            </span>
          </p>
        )}
        {formType === "forgotPassword" && (
          <p>
            Remembered your password?{" "}
            <span style={styles.link} onClick={() => handleFormSwitch("login")}>
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
};



const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "10px",
  },
  link: {
    color: "#007BFF",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default LoginPage;
