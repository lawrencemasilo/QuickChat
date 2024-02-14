import test from '../images/user.svg'
import { useContext, useEffect, useRef, useState } from 'react'
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';

function Contact() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const userChatRef = doc(db, "userChats", currentUser.uid);
        const userChatSnap = await getDoc(userChatRef);

        if (userChatSnap.exists()) {
          const chatData = userChatSnap.data();
          const filteredChats = Object.entries(chatData)
            .filter(([key, value]) => key !== "messages")
            .map(([key, value]) => ({ id: key, ...value }));

          setChats(filteredChats);
        } else {
          console.log("User's chat document does not exist");
        }
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    if (currentUser.uid) {
      fetchChats();
    }
  }, [currentUser.uid]);

  const handleSelect = (chat) => {
    dispatch({ type: "CHANGE_USER", payload: chat.userInfo });
  };

  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data && data.chatId) {
      const messagesRef = collection(db, 'userMessages', data.chatId, 'messages');
      const q = query(messagesRef, orderBy('timestamp', 'desc'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newMessages = [];
        snapshot.forEach((doc) => {
          newMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(newMessages);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [data]);
  return (
    <>
      {chats.map((chat) => (
        <div className="contact-container" key={chat.id} onClick={() => handleSelect(chat)}>
          <img src={test} alt="user profile picture" />
          <div className="user-name-text">
            <h1 className="user-name">{chat.userInfo.displayName}</h1>
            <p className='latest-text'>
              {/*
                messages && messages.map((message) => (
                  message[0].content
              ))*/
              }
            </p>
          </div>
          <div className="text-time">
            <p>{chat.date?.toDate().toLocaleTimeString()}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Contact;
