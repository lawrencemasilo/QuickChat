import test from '../images/user.svg'
import { useContext, useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';


function Contact() {
  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const displayChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    if (currentUser.uid) {
      displayChats();
    }
  }, [currentUser.uid])

  
  /*useEffect(() => {
    const displayChats = async () => {
      try {
        if (currentUser && currentUser.uid) {
          const docRef = doc(db, "userChats", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setChats(docSnap.data());
          } else {
            console.log("User chats document does not exist");
          }
        } else {
          console.log("Current user or user ID is undefined");
        }
      } catch (error) {
        console.error("Error fetching user chats:", error);
      }
    };

    displayChats();
  }, [currentUser]);
  
  {chats[1].userInfo.displayName}
  {chats[1].date.seconds}*/
  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }
  /*
  {Object.entries(chats)?.map((chats) => (
        <div className="contact-container" key={chats} onClick={handleSelect}>     
          <img src={test} alt="user profile picture" />
          <div className="user-name-text">
            <h1 className="user-name"></h1>
            <p className="latest-text"></p>
          </div>
          <div className="text-time">
            <p></p>
          </div>
        </div>
      ))}
   
  console.log(chats)*/
  return (
    <>
      {Object.entries(chats).map(([chatId, chat]) => (
        chatId !== "messages" && (
          <div className="contact-container" key={chatId} onClick={() => handleSelect(chat)}>     
            <img src={test} alt="user profile picture" />
            <div className="user-name-text">
              <h1 className="user-name">{chat.userInfo.displayName}</h1>
              <p className="latest-text"></p>
            </div>
            <div className="text-time">
              <p>{chat.date.seconds}</p>
            </div>
          </div>
        )
      ))}
    </>
  )
}

export default Contact