import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from './Footer';
import { useState } from 'react';

export default function Login() {
  let histoy = useHistory();
  const onSubmit = () => {
    histoy.push("/");
  }
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="card mb-3 mt-5 loginsignup">
          <div className="row g-0">
            <div className="col-md-4 d-flex remsignup"><Link to="/SignUp"><button className='btn btn-danger'>Sign Up</button></Link></div>
            <div className="col-md-8">
              <div className="card-body">
                <h3>Login Here</h3>
                <div className="mt-5 mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" name='username' autoComplete="on" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name='email' autoComplete="on" aria-describedby="emailHelp" required />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="passicon mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} className="form-control" id="password" name='password' autoComplete="on" minLength={5} required />
                  {passwordType === "password" ? <i className="bi bi-eye" onClick={togglePassword}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg></i> : <i class="bi bi-eye" onClick={togglePassword}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg></i>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "80%", marginLeft: "10%" }}>Login</button>
                <Link className='dontorhaveaccount mt-4' to="/SignUp">Dont have account? Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
