import React from 'react'
import { Link, useHistory } from 'react-router-dom'
export default function Login() {
  let histoy = useHistory();
  const onSubmit = () => {
    histoy.push("/");
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="card mb-3 mt-5" style={{ maxWidth: "75%", marginLeft: "10%", borderRadius:"30px" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex" style={{alignItems: "center", justifyContent: "center",borderRadius:"30px 0 0 30px",backgroundColor:"#42bec0"}}><Link to="/SignUp"><button className='btn btn-danger'>Sign Up</button></Link></div>
          <div className="col-md-8" style={{backgroundColor: "lavender",borderRadius:"0 30px 30px 0"}}>
            <div className="card-body">
              <h3>Login Here</h3>
              <div className="mt-5 mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" minLength={5} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{width:"80%",marginLeft:"10%"}}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
