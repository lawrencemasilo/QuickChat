import { signOut } from 'firebase/auth'
import test from '../images/user.svg'
import { auth, db } from '../firebase'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { doc, getDoc } from "firebase/firestore";


function NavBar() {
  const { currentUser } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDisplayName(docSnap.data().displayName)
          //console.log(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);
  
  return (
    <div className="navbar-container">
      <div className="user-container">
        <img src={test} alt="user profile picture" />
        <h1 className="username">{displayName}</h1>
        <div className="logout-button-continainer">
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar