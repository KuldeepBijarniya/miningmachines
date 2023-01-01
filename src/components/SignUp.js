import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [text, setText] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [passwordType1, setPasswordType1] = useState("password");
  const [passwordType2, setPasswordType2] = useState("password");
  const handleOnChange = (e) => {
    let t = e.target.value;
    let result = t.replaceAll(' ', '');
    setText(result);
  }

  const handlePassword = (e) => {
    setP1(e.target.value);
  }
  const handleCPassword = (e) => {
    setP2(e.target.value);
  }
  const togglePassword1 = () => {
    if (passwordType1 === "password") {
      setPasswordType1("text")
      return;
    }
    setPasswordType1("password")
  }

  const togglePassword2 = () => {
    if (passwordType2 === "password") {
      setPasswordType2("text")
      return;
    }
    setPasswordType2("password")
  }
  let history = useHistory();
  const handleOnSubmit = () => {
    history.push("/");
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="card mb-3 mt-5 loginsignup">
          <div className="row g-0">
            <div className="col-md-4 d-flex remsignup"><Link to="/Login"><button className='btn btn-danger'>Login</button></Link></div>
            <div className="col-md-8">
              <div className="card-body">
                <h3>Sign Up Here</h3>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" name='username' autoComplete="on" value={text} onChange={handleOnChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name='email' autoComplete="on" aria-describedby="emailHelp" required />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="passicon mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type={passwordType1} className="form-control" id="password" name='password' autoComplete="on" value={p1} onChange={handlePassword} minLength={5} required />
                  {passwordType1 === "password" ? <i className="bi bi-eye" onClick={togglePassword1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg></i> : <i class="bi bi-eye" onClick={togglePassword1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg></i>}
                </div>
                <div className="passicon mb-3">
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input type={passwordType2} className="form-control" id="cpassword" name='cpassword' autoComplete="on" value={p2} onChange={handleCPassword} minLength={5} required />
                  {passwordType2 === "password" ? <i className="bi bi-eye" onClick={togglePassword2}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg></i> : <i class="bi bi-eye" onClick={togglePassword2}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg></i>}
                  <div className={`from-text ${p1 !== p2 ? "visible" : "d-none"}`}>Confirm password is different from entered password</div>
                  <div className={`from-text ${p1 === p2 ? "visible" : "d-none"}`}>Confirm password same as entered password</div>
                </div>
                <button type="submit" disabled={p1 !== p2 || p1==="" || text === ""} className="btn btn-primary" style={{ width: "80%", marginLeft: "10%" }}>Sign Up</button>
                <Link className='dontorhaveaccount mt-4' to="/Login">Already have an account? Login</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
