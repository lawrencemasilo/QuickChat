import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // sents an email to reset your password
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        navigate("/resetpassword", { state : { email: email }});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <h1 className="title">
            QuickChat
          </h1>

          <form onSubmit={handleSubmit} className="login-form validate-form">
            <p className="forgot-title">Enter Your Email</p>
            <div className="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz" > 
              <input className="input" type="email" name="email" placeholder="Email" required/>
              <span className="focus-input"></span>
            </div>
      
            <div className="container-login-form-btn">
              <button className="login-form-btn">
                Send email
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">
                Remember 
              </span>
              <Link to="/login" className="txt2" className="signIn-link">your password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPage;