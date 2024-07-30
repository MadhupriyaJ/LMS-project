import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', passwordHash);

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, passwordHash }),
      });

      if (response.ok) {
        const isAdmin = email === "shahul@hotmail.com"; // Check if the user is an admin based on the email

        if (isAdmin) {
          console.log("Redirecting to admin_homepage...");
          navigate("/admin_homepage"); // Redirect admin to admin_homepage
        } else {
          if (location.pathname === "/admin_homepage") {
            console.log("You are not authorized to access this page.");
          } else {
            const { from } = location.state || { from: { pathname: "/homepage" } };
            console.log("Redirecting to:", from);
            navigate(from); // Redirect regular user to the previous page or /homepage
          }
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="modal_full">
      <div className="Header">
        <img
          class="lazyImages"
          style={{ minHeight: "5px", width: "45", height: "45" }}
          alt=""
          src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1686587146/img/elearningpop.svg"
        ></img>
        <h4 className="modal-title_signup-new-title">Let's Get Started</h4>
      </div>

      <div className="modal_body">
        <label className="modal_email">Email</label>
        <input
          placeholder="e.g. sara@gmail.com*"
          className="modal_emailInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="data[User][email]"
          id="si_popup_email"
          onfocus="this.placeholder = 'e.g. sara@gmail.com*'"
          onblur="this.placeholder = 'e.g. sara@gmail.com*'"
          autocomplete="off"
          data-gtm-form-interact-field-id="0"
        />
        <p class="errormsg_vd" id="emailErrorr"></p>
        <label className="modal_password">Password</label>

        <input
          type="password"
          value={passwordHash}
            onChange={(e) => setPasswordHash(e.target.value)}
          name="data[User][password]"
          className="modal_passwordInput"
          placeholder="Enter your Password"
          id="si_popup_passwd"
          onfocus="this.placeholder = 'Enter your Password'"
          onblur="this.placeholder = 'Enter your Password'"
          data-gtm-form-interact-field-id="1"
        />
        <p class="errormsg_vd" id="passwdErrorr"></p>
        <span class="float_lnk fgt-vd_pw">Forgot Password?</span>
        <p className="modal_terms">
          <span class="note">Please Note: </span>By continuing and signing in,
          you agree to Edureka's{" "}
          <span>
            <a href="/terms-and-conditions" target="_blank">
              Terms &amp; Conditions
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
          </span>
          .
        </p>
        <button className="modal_loginbutton" type="submit" onClick={signIn}>Login</button>
        <p className="modal_dontaccount">Don’t have an account? <Link to = "/signup">
            <span class="signup-vd">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
