import React from "react";
import "./Login.scss";
import logo from "../../Assets/logo.png";
import canva from "../../Assets/canva.png";

function Login() {
  // BEM
  return (
    <div className="login">
      <div className="login__left">
        <img src={logo} alt="" className="logo" />
        <img src={canva} alt="" className="canva" />
      </div>
      <div className="login__right">
        <div className="login__box">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form>
            <div className="form__input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form__input">
              <input placeholder="Password" />
            </div>
            <span>Forgot password?</span>
            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
