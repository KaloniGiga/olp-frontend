import React from "react";
import "../styles/ChatPerson.css";
const ChatPerson = () => {
  return (
    <>
      <div className="chat-person">
        <div className="chat-person-img">
          <img
            src="https://www.circumcisionpro.co.uk/wp-content/uploads/2021/05/avatar-profile-picture.jpg"
            alt="chat-friend-img"
          />
        </div>
        <div className="chat-person-name">
          <h6>Sunder Pichai</h6>
          <h6>How are you?</h6>
        </div>
        <div className="chat-person-date-notification">
          <h6>Friday</h6>
          <div className="chat-badge">10</div>
        </div>
      </div>
    </>
  );
};

export default ChatPerson;
