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
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar

/*import { signOut } from 'firebase/auth';
import test from '../images/user.svg';
import { auth, db } from '../firebase';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc } from "firebase/firestore";

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("Loading..."); // Initial loading state
  const [error, setError] = useState(null);

  /*useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDisplayName(docSnap.data().displayName);
        } else {
          setError("User data not found");
        }
      } catch (error) {
        setError("Error fetching user data");
        console.error(error);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if(currentUser) { // Add null check for currentUser
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDisplayName(docSnap.data().displayName);
          } else {
            setError("User data not found");
          }
        }
      } catch (error) {
        setError("Error fetching user data");
        console.error(error);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  return (
    <div className="navbar-container">
      <div className="user-container">
        <img src={test} alt="user profile picture" />
        <h1 className="username">{displayName}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default NavBar;


/*import { signOut } from 'firebase/auth';
import test from '../images/user.svg';
import { auth, db } from '../firebase';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc } from "firebase/firestore";

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDisplayName(docSnap.data()?.displayName);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  return (
    <div className="navbar-container">
      <div className="user-container">
        <img src={test} alt="user profile picture" />
        <h1 className="username">{displayName}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;


// NavBar.jsx
import { signOut } from 'firebase/auth';
import test from '../images/user.svg';
import { auth, db } from '../firebase';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (currentUser && currentUser.uid) {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDisplayName(docSnap.data().displayName);
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('Current user or user ID is undefined');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div className="navbar-container">
      <div className="user-container">
        <img src={test} alt="user profile picture" />
        <h1 className="username">{displayName}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;*/
