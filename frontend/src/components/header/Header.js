import React from "react";
import "./headerStyles.css";
import notificationIcon from "../../images/notification.png"; // Import the image

export default function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <div className="">
        
      </div>
      
      <div className="icons">
        <h3>Welcome!</h3>
        <img src={notificationIcon} alt="Notification" className="notification-icon" />
      </div>
    </div>
  );
}
