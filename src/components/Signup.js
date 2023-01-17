import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../css/center.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [creadential, setCreadential] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: creadential.name, email: creadential.email, password: creadential.password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      toast.success('Your Account Has Been Created Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: true,
        theme: "dark",
      });
      navigate("/home")
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
    <div className='my-5 div-center'>
      <div className="content">
        <h3 className='text-center'>Sign Up</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Name <span className='red'>*</span></label>
            <input type="name" name="name" className="form-control" id="name" aria-describedby="name" onChange={onchange} required />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='red'>*</span></label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchange} required />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">Password <span className='red'>*</span></label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={onchange} minLength={5} required />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password <span className='red'>*</span></label>
            <input type="cpassword" name="cpassword" className="form-control" id="exampleInputPassword1" onChange={onchange} minLength={5} required />
          </div>
          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default SignUp