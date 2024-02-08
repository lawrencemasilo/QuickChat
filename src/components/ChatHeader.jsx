import { useContext } from 'react';
import test from '../images/user.svg'
import { ChatContext } from '../context/ChatContext';

function ChatHeader() {
  const { data } = useContext(ChatContext);
  /*{data.user ? data.user.displayName : "Loading..."} 
  <div className="status-color"></div>
  */
  return (
    <div className="chatheader-container">
      <img src={test} alt="user profile picture" />
      
      <div className="user-name-text">
        <h1 className="user-name">user2</h1>
        <p className="status">Online</p>
      </div>
    </div>
  )
}

export default ChatHeader;
