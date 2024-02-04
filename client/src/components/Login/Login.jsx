import React, { useState } from 'react'
import "./login.css"
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/action/user';


function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch=useDispatch();
  const UserLogin=(e)=>{
    e.preventDefault();
    dispatch(userLogin(email,password));
  }


  return (
   

    <>
    <div className='register'>

    <div className="wrapper">
        <div className="logo1">
            <img src="assets/img/cart-item.png" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            OptiCart
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="email" name="userEmail" id="userEmail" placeholder="Email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 required
                />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
            </div>
            <button className="btn mt-3" onClick={UserLogin}>Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="/forgot" className='user'> New User? </a> <a href="/register">Sign up</a>
        </div>
    </div>
    
    </div>
 </>
  );
}

export default Login