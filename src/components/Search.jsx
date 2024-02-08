import { useContext, useState } from 'react';
import { collection, query, where, getDocs, doc, serverTimestamp, updateDoc, getDoc, setDoc } from "firebase/firestore";
import test from '../images/user.svg';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } else {
        setUser(null); // Reset user state if no user found
      }
    } catch (error) {
      console.error("Error searching user:", error);
      setUser(null); // Reset user state on error
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  /*const handleSelect = async () => {
    if (currentUser && user) {
      const chatId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
      try {
        const res = await getDoc(doc(db, "chats", chatId));

        if (!res.exists()) {
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [chatId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
            },
            [chatId + ".date"]: serverTimestamp(),
          });

          await updateDoc(doc(db, "userChats", user.uid), {
            [chatId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
            },
            [chatId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.error("Error selecting user:", error);
      }
    }
  };*/
  const handleSelect = async () => {
    if (currentUser && user) {
      const chatId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
      try {
        const resCurrentUser = await getDoc(doc(db, "userChats", currentUser.uid));
        const resUser = await getDoc(doc(db, "userChats", user.uid));

        if (!resCurrentUser.exists()) {
          await setDoc(doc(db, "userChats", currentUser.uid), { messages: [] });
        }
        if (!resUser.exists()) {
          await setDoc(doc(db, "userChats", user.uid), { messages: [] });
        }

        const resChat = await getDoc(doc(db, "userChats", currentUser.uid));
        if (!resChat.data()[chatId]) {
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [chatId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
            },
            [chatId + ".date"]: serverTimestamp(),
          });
        }

        const resChat2 = await getDoc(doc(db, "userChats", user.uid));
        if (!resChat2.data()[chatId]) {
          await updateDoc(doc(db, "userChats", user.uid), {
            [chatId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
            },
            [chatId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.error("Error selecting user:", error);
      }
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <span className="material-symbols-outlined">search</span>
        <input type="text" id="search" placeholder="Search user" onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>

      {user && (
        <div className="search-user" onClick={handleSelect}>
          <img src={test} alt="user profile picture" />
          <div className="user-name-text">
            <h1 className="user-name">{user.displayName}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
