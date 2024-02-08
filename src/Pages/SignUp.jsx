import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";


function SignUp() {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email
      });

      await setDoc(doc(db, "userMessages", res.user.uid), {});
      navigate("/");

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

          <form className="login-form validate-form" onSubmit={handleSubmit}>
            <span className="login-form-title">
              Sign Up
            </span>

            <div className="wrap-input validate-input" data-validate = "Username is required">
              <input className="input" type="text" name="user" placeholder="Create Username" />
              <span className="focus-input"></span>
            </div>

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
                Sign Up
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">
                <Link to="/login">Already have an account?</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp