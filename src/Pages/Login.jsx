import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import googleImg from "../images/google.svg"

function Login() {
  const [inputValue, setInputValue] = useState(null);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

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

  const handleClick = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      navigate("/home")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
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

            <div className="text-center p-t-136">
              <span className="txt1">
                Forgot
              </span>
              <p className="txt2" href="#">
              <Link to="/forgot" className="signIn-link">Password?</Link>
              </p>
            </div>

            <div className="alt-login-container">
              <div className="separater1"></div>
              <p className="or">OR</p>
              <div className="separater2"></div>
            </div>
            <div className="alt-providers">
              <div className="google-provider">
                <img src={googleImg} alt="google icon" onClick={handleClick} />
              </div>
            </div>

            <div className="text-center p-t-136">
              <span className="txt1">
                Don't have an account?
              </span>
              <p className="txt2" href="#">
                <Link to="/signup" className="signIn-link">Sign Up Now!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
