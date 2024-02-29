import { useLocation } from "react-router-dom";


const AfterResetPassword = () => {
  //Handles when an email is sent
  const state = useLocation();
  const emailAddress = state.state.email;
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <h1 className="title">
            QuickChat
          </h1>
          <p>Email sent to <span className="forgot-email">{emailAddress}</span></p>
        </div>
      </div>
    </div>
  )
}

export default AfterResetPassword;