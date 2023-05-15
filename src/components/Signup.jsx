import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (animate) => {
    setIsAnimated(!isAnimated);
    setIsVisible(!isVisible);
  };
  const handleButtonClick0 = (animate) => {
    if (animate === "login") {
      navigate("/personaldetails");
    } else {
      navigate("/");
    }
  };
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${email},UserName: ${username}`);
  };

  return (
    <>
      <div className="signup-page py-5">
        <div className="container">
          <div className="login-signup">
            <div className={`login ${isAnimated ? "animated" : "notanimated"}`}>
              <div className="login-text">
                <form className="form_feild" onSubmit={handleSubmit}>
                  <h2>{isAnimated ? "Create Account" : "Sign in"} </h2>
                  <div className="form-icon d-flex justify-content-center gap-3">
                    <i className="bi bi-facebook"></i>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-linkedin"></i>
                  </div>
                  <p>
                    {" "}
                    {isAnimated
                      ? "or use your email for registration"
                      : "or use your email account"}
                  </p>
                  {isVisible && (
                    <input
                      placeholder="UserName....."
                      className="input_field px-3 py-1"
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  )}
                  <input
                    placeholder="Email....."
                    className="input_field px-3 py-1"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <br />
                  <input
                    placeholder="password...."
                    className="input_field px-3 py-1"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <br />
                  {!isVisible && (
                    <p className="form-forget mt-2">
                      <Link className="text-decoration-none">
                        Forgot your Password?
                      </Link>
                    </p>
                  )}
                  <button
                    className="form_btn"
                    type="submit"
                    onClick={() =>
                      handleButtonClick0(isAnimated ? "login" : "signup")
                    }
                  >
                    {isAnimated ? "SignUp" : "Login"}
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`signup ${isAnimated ? "animated" : "notanimated"}`}
            >
              <div className="signup-text">
                <h2> {isAnimated ? "Welcome Back!" : "Hello, Friend"}</h2>
                <p className="px-5">
                  {isAnimated
                    ? `To keep connected with us please  login with your personal details`
                    : `Enter your personal details and start your journey with us`}{" "}
                </p>
                <button
                  className="login_btn"
                  onClick={() =>
                    handleButtonClick(isAnimated ? "login" : "signup")
                  }
                >
                  {isAnimated ? "Login" : "SignUp"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
