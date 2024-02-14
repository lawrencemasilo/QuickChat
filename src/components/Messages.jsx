import { useContext, useEffect, useRef, useState } from 'react';
import Message from './Message';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (data && data.chatId) {
      const messagesRef = collection(db, 'userMessages', data.chatId, 'messages');
      const q = query(messagesRef, orderBy('timestamp', 'asc'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newMessages = [];
        snapshot.forEach((doc) => {
          newMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(newMessages);
        scrollToBottom();
      });

      return () => {
        unsubscribe();
      };
    }
  }, [data]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="messages-container" ref={messagesContainerRef}>
      {messages && messages.map((message) => (
        <Message key={message.id} message={message} />
      ))
      }
    </div>
  );
}

export default Messages;
