import { useContext, useState } from 'react';
import { collection, query, where, getDocs, doc, serverTimestamp, updateDoc, getDoc, setDoc } from "firebase/firestore";
import test from '../images/user.svg';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

function Search() {
  const [username, setUsername] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);


  const handleChange = (e) => {
    setUsername(e.target.value);
    setInputValue(e.target.value);
  };

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
        setUser(null);
      }
    } catch (error) {
      console.error("Error searching user:", error);
      setUser(null);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async (selectedUser) => {
    if (currentUser && selectedUser) {
      const chatId = currentUser.uid > selectedUser.uid ? currentUser.uid + selectedUser.uid : selectedUser.uid + currentUser.uid;
      try {
        const currentUserChatRef = doc(db, "userChats", currentUser.uid);
        const currentUserChatSnap = await getDoc(currentUserChatRef);

        if (!currentUserChatSnap.exists()) {
          await setDoc(currentUserChatRef, { messages: [] });
        }

        const selectedUserChatRef = doc(db, "userChats", selectedUser.uid);
        const selectedUserChatSnap = await getDoc(selectedUserChatRef);

        if (!selectedUserChatSnap.exists()) {
          await setDoc(selectedUserChatRef, { messages: [] });
        }

        const currentUserChatData = currentUserChatSnap.data();
        if (!currentUserChatData[chatId]) {
          await updateDoc(currentUserChatRef, {
            [chatId]: {
              userInfo: {
                uid: selectedUser.uid,
                displayName: selectedUser.displayName,
              },
              date: serverTimestamp(),
            },
          });
        }
        const selectedUserChatData = selectedUserChatSnap.data();
        if (!selectedUserChatData[chatId]) {
          await updateDoc(selectedUserChatRef, {
            [chatId]: {
              userInfo: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
              },
              date: serverTimestamp(),
            },
          });
        }
      } catch (error) {
        console.error("Error selecting user:", error);
      }
    }
  };

  const handleClose = () => {
    setInputValue("");
  }

  return (
    <div className="search-container">
      <div className="search-input-container">
        <span className="material-symbols-outlined">search</span>
        <input type="text" id="search" placeholder="Search user" onKeyDown={handleKey} onChange={handleChange} value={inputValue} />
        {inputValue && <span className="material-symbols-outlined close" onClick={handleClose}>close</span>}
      </div>

      {user && inputValue && (
        <div className="search-user" onClick={() => handleSelect(user)}>
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

