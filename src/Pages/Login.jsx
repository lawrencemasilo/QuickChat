import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }catch(err){
      console.log(err);
    }
    
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

            <div className="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
              <input className="input" type="text" name="email" placeholder="Email" />
              <span className="focus-input"></span>
            </div>

            <div className="wrap-input validate-input" data-validate = "Password is required">
              <input className="input" type="password" name="pass" placeholder="Password" />
              <span className="focus-input"></span>
            </div>
            
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
                Username / Password?
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
