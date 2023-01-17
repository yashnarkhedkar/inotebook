import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../css/center.css"

const Login = () => {
  const [creadential, setCreadential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: creadential.email, password: creadential.password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      toast.success('You are successfully logged in', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        pauseOnHover: true,
        theme: "dark",
      });
      navigate("/")
    } else {
      toast.error('Please check your email id or password!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  }

  const onchange = (e) => {
    setCreadential({ ...creadential, [e.target.name]: e.target.value })
  }
  return (
    <div className="div-center">
      <div className="content">
        <h3>Login</h3>
        <hr />
        <form>
          <div className="form-group mt-2 mb-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" onChange={onchange} />
          </div>
          <div className="form-group mt-2 mb-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={onchange} placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-2" onClick={handleSubmit}>Login</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}


export default Login