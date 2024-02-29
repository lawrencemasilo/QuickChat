import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [inputValue, setInputValue] = useState(null);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    /* passes the credentials to the user authentication system in the backend */
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    if (email && password) {
      setInputValue(email);
    }
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/home")
    }catch(err){
      setErr(true);
    }
    
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
            <h1 className="title">
              QuickChat
            </h1>

          <form onSubmit={handleSubmit} className="login-form validate-form">
            
            
            <span className="login-form-title">
              Login
            </span>

            <div className="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz" >
              {err &&
              <input className="input" type="email" name="email" placeholder="Email" onChange={handleChange} required/>}
              {!err && 
              <input className="input" type="email" name="email" placeholder="Email" onChange={() => setInputValue(null)} required/>}
              <span className="focus-input"></span>
            </div>

            <div className="wrap-input validate-input" data-validate = "Password is required">
              <input className="input" type="password" name="pass" placeholder="Password" required/>
              <span className="focus-input"></span>
            </div>
            {err && <p className="err">Incorrect username or password</p>}
            <div className="container-login-form-btn">
              <button className="login-form-btn">
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">
                Forgot
              </span>
              <a className="txt2" href="#">
              <Link to="/forgot">Username / Password?</Link>
              </a>
            </div>

            <div className="text-center p-t-136">
              <p className="txt2" href="#">
                <Link to="/signup">Create your Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
