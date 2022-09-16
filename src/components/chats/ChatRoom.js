import React from "react";
import { io } from 'socket.io-client';

//import "./ChatRoom.css"

import useChat from "../../hooks/useChat";
import styled from "styled-components"




const ChatRoom = (props) => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };



const StyleContainer = styled.div`


margin: 0 auto;
width: 70%;
height:200%;

button{

  font-size: 28px;
  font-weight: 600;
  color: white;
  background: #3786ac;
  padding: 24px 12px;
  border: none;
}



`;

const StyledMessage = styled.div `

flex: 1;
min-height: 50px;
overflow: auto;
border: 1px solid black;
border-radius: 7px 7px 0 0;
`;

const StyledTextArea = styled.textarea `
height: 200px;
max-height: 50%;
font-size: 20px;
padding: 8px 12px;
resize: none;


`;










  return (
    <StyleContainer>
      {/* <h1 className="room-name">Room: {roomId}</h1> */}
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </StyleContainer>
  );
};

export default ChatRoom;