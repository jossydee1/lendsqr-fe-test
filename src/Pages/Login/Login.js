import React from "react";
import "./Login.scss";
import logo from "../../Assets/logo.png";
import canva from "../../Assets/canva.png";

function Login() {
  // BEM

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

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
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="form__input">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <span>Forgot password?</span>
            <button onClick={handleSubmit}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
