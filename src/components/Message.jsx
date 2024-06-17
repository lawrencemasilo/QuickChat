import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Message(props) {
 const { currentUser } = useContext(AuthContext);
  return (
    <div className="message-container">
        {currentUser && <div className="info-container">
          <div className="sender-container">
            {props.message.senderId === currentUser.uid &&
              <div className="text-container">
                <p>{props.message.content}</p>
              </div>
            }
            {props.message.senderId === currentUser.uid &&
              <div className="timestamp2">
                <p>{
                props.message.timestamp && props.message.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }</p>
              </div>
            }
          </div>
          <div className="receiver-container">
            {props.message.senderId != currentUser.uid &&
              <div className="text-container2">
                <p>{props.message.content}</p>
              </div>
            }
            {props.message.senderId != currentUser.uid &&
              <div className="timestamp">
                <p>{
                 props.message.timestamp && props.message.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }</p>
              </div>
            }
          </div>
        </div>}        
    </div>  
  )
}

export default Message;