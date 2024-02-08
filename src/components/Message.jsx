import { useContext } from 'react';
import test2 from '../images/test2.jpg'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

function Message({ message }) {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  console.log(message);
  return (
    <div className="message-container">
        <div className="info-container">
          <div className="text-container">
            <p>How are you this morning</p>
          </div>
            <div className="img-container">
              <img src={test2} alt="" />
            </div>
          <div className="timestamp">
            <p>11:40</p>
          </div>
        </div>        
      
    </div>
    
  )
}

export default Message;