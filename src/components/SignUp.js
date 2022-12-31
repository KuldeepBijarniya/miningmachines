import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [text, setText] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
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

  let history = useHistory();
  const handleOnSubmit = () => {
    history.push("/");
  }

  return (
    <>
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' autoComplete="on" value={p1} onChange={handlePassword} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="cpassword" className="form-control" id="cpassword" name='cpassword' autoComplete="on" value={p2} onChange={handleCPassword} minLength={5} required/>
          <div className={`from-text ${p1 !== p2 ? "visible" : "d-none"}`}>confirm password in different from entered password</div>
          <div className={`from-text ${p1 === p2 ? "visible" : "d-none"}`}>confirm password same as entered password</div>
        </div>
              <button type="submit" disabled={p1 !== p2 || text === ""} className="btn btn-primary" style={{width:"80%",marginLeft:"10%"}}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <Footer/>
    </>
  )
}
