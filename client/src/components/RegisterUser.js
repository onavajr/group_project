import React, { useState } from "react";
import axios from "axios";

const RegisterUser = props => {
  const [confirmReg, setConfirmReg] = useState("");
  const [errs, setErrs] = useState({});

  // Using a single state object to hold all data
  const [ user, setUser ] = useState({
    username: "",
    email: "", 
    password: "", 
    confirmPassword: "",
  })

  // using a single function to update the state object
  //    we can use the input's name attribute as the key in to the object
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const register = e => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/users/register", 
      user,             
      {
       
        withCredentials: true,
      })
      .then(res => {
        console.log(res.data);

       
        setUser({
          username: "",
          email: "", 
          password: "", 
          confirmPassword: "",
        })

        setConfirmReg("Thank you for Registering, you can now log in!");
        setErrs({});  
      })
      .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {
        confirmReg ? 
          <h4 style={{color: "green"}}>{confirmReg}</h4>
          : null
      }
      <form onSubmit={register}>
        <div>
          <label className="label">Username </label>
          {
            errs.username ? 
              <span className="error-text">{ errs.username.message }</span>
              : null
          }
          <input
            className = "input"
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label className="label">Email </label>
          {
            errs.email? 
              <span className="error-text">{ errs.email.message }</span>
              : null
          }
          <input
            className = "input"
            type="email"
            name="email"
            value={user.email}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label className="label">Password </label>
          {
            errs.password ? 
              <span className="error-text">{ errs.password.message }</span>
              : null
          }
          <input
            className = "input"
            type="password"
            name="password"
            value={user.password}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Confirm Password </label>
          {
            errs.confirmPassword? 
              <span className="error-text">{ errs.confirmPassword.message }</span>
              : null
          }
          <input
            className = "input"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={ handleChange }
          />
        </div>
        <div className="center">
          <br />
          <button 
            type="submit"
          >Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
