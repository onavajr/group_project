import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import { GiMusicSpell } from "react-icons/gi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = event => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/users/login", { 
        email: email, 
        password: password,
      },
      {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.cookie);
        console.log(res);
        console.log(res.data, 'is res data!');
        navigate("/musicland");
      })
      .catch(err => {
        console.log(err.response);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <div>
        <h1 className="header-logo"><GiMusicSpell />Music Land</h1>
      </div>
      
      <h1>Login</h1>
      <p className="error-text">{errorMessage ? errorMessage : ""}</p>
      <form onSubmit={login} className="login">
        <div>
          <label className="label">Email </label>
          <input
            className = "input"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Password </label>
          <input
            className = "input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="center">
          <button 
            type="submit"
          >Sign In</button>
        </div>
      </form>
    </div>
    
  );
};

export default Login;