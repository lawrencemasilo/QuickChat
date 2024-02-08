import InfoBar from "../components/InfoBar"
import Chat from "../components/Chat"


function ChatPage() {
  return (
    <div className="chat-page">
      <div className="chat-container">
        <InfoBar />
        <Chat />
      </div>
    </div>
  )
}

export default ChatPage