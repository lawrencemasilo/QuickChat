import ChatHeader from "./ChatHeader"
import Input from "./Input"
import Messages from "./Messages"


function Chat() {
  
  return (
    <div className="chat">
      <ChatHeader />
      <div className="text-bar">
        <Messages />
      </div>
      <Input />
    </div>
  )
}

export default Chat