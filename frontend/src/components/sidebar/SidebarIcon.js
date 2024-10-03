import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import dashboardIcon from "../../images/dashboard.png";
import itemsIcon from "../../images/items.png";
import analyticsIcon from "../../images/analytics.png";
import feedbackIcon from "../../images/feedback.png";
import profileIcon from "../../images/profile.png";
import logoutIcon from "../../images/logout.png";
import Logo from "../../images/leaf.png"; // Importing the shop logo

export default function SidebarIcon() {
  const [activeLink, setActiveLink] = useState("/"); // Default to Dashboard

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div className="box-above-dashboard">
        <img src={Logo} alt="Logo" className="shop-logo" />
      </div>

      <Link
        to="/"
        className={activeLink === "/" ? "active" : ""}
        onClick={() => handleLinkClick("/")}
      >
        <img src={dashboardIcon} alt="Dashboard" className="sidebar-icon" />
        Dashboard
      </Link>

      <Link
        to="/shops"
        className={activeLink === "/shops" ? "active" : ""}
        onClick={() => handleLinkClick("/shops")}
      >
        <img src={profileIcon} alt="Profile" className="sidebar-icon" />
        Profile
      </Link>

      <Link
        to="/products"
        className={activeLink === "/products" ? "active" : ""}
        onClick={() => handleLinkClick("/products")}
      >
        <img src={itemsIcon} alt="Products" className="sidebar-icon" />
        Payment
      </Link>

      <Link
        to="/analytics"
        className={activeLink === "/analytics" ? "active" : ""}
        onClick={() => handleLinkClick("/analytics")}
      >
        <img src={analyticsIcon} alt="Analytics" className="sidebar-icon" />
        Requests
      </Link>

      <Link
        to="/feedback"
        className={activeLink === "/feedback" ? "active" : ""}
        onClick={() => handleLinkClick("/feedback")}
      >
        <img src={feedbackIcon} alt="Feedback" className="sidebar-icon" />
        Progress
      </Link>
      
      <Link
        to="/history"
        className={activeLink === "/collection-history" ? "active" : ""}
        onClick={() => handleLinkClick("/collection-history")}
      >
        <img src={feedbackIcon} alt="Collection History" className="sidebar-icon" />
        Collection History
      </Link>

      <div className="sidebar-spacer"></div>

      <Link
        to="/logout"
        className={activeLink === "/logout" ? "active" : ""}
        onClick={() => handleLinkClick("/logout")}
      >
        <img src={logoutIcon} alt="Logout" className="sidebar-icon" />
        Logout
      </Link>
    </div>
  );
}
