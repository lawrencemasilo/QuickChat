import { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  /*useEffect(() => {
    if (data && data.ChatId) {
      const unsub = onSnapshot(doc(db, "chats", data.ChatId), (doc) => {
        if (doc.exists()) {
          const messagesData = doc.data()?.messages || [];
          setMessages(messagesData);
        } else {
          console.log("Chat document does not exist");
        }
      });

      return () => {
        unsub();
      };
    } else {
      console.log("ChatId is not available");
    }
  }, [data]);*/
  /*useEffect(() => {
    if (data && data.ChatId) {
      const unsub = onSnapshot(doc(db, "chats", data.ChatId), (doc) => {
        try {
          if (doc.exists()) {
            const messagesData = doc.data()?.messages || [];
            setMessages(messagesData);
          } else {
            console.log("Chat document does not exist");
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      });

      return () => {
        unsub();
      };
    } else {
      console.log("ChatId is not available");
    }
  }, [data]);
  {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
  */

  return (
    <div className="messages-container">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;

