import React, { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/action/user.js";
const Register = () => {

    const dispatch=useDispatch();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmpassword]=useState('');

   

     const userRegistration=(e)=>{
      e.preventDefault();
          dispatch(userRegister(name,email,password,confirmpassword));
     }

  return (
    <>
      <div className="register">
        <div className="wrapper">
          <div className="logo1">
            <img src="assets/img/mmlogo.png" alt="" />
          </div>
          <div className="text-center mt-4 name">Menstrual Mavericks</div>

          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                type="text"
                name="userName"
                value={name}
                onChange={e => setName(e.target.value)}
                id="userName"
                placeholder="Username"
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="far fa-envelope"></span>
              <input
                type="email"
                name="useremail"
                id="userName"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                name="confirmpassword"
                id="pwd"
                placeholder="ConfirmPassword"
                value={confirmpassword}
                onChange={e => setConfirmpassword(e.target.value)}
              />
            </div>

            <button className="btn mt-3" onClick={userRegistration}> Create Account</button>
          </form>
          <div className="text-center fs-6">
            <a href="/ok" className="user">
              Already User?
            </a>
            <span
              style={{
                color: "#009688",
                fontWeight: "bold",
                marginLeft: "4px",
              }}
            >
              <a href="/">Sign in</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;