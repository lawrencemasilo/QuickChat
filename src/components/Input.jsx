import { useState } from "react";
import { db } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Input() {
  const [inputValue, setInputValue] = useState('');
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async (message) => {
    if (message.trim() === '') return;
    try {
      const messagesRef = collection(db, 'userMessages', data.chatId, 'messages');
      await addDoc(messagesRef, {
        content: message,
        senderId: currentUser.uid,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  const handleClick = () => {
    sendMessage(inputValue);
    setInputValue("");
  };
  return (
    <div className="input-container">
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Message..."/>
      <button className="send-button" onClick={handleClick}>
        <span className="material-symbols-outlined">send</span>
      </button>  
    </div>
  )
}

export default Input;