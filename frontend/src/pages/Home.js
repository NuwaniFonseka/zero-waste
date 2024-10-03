import React from "react";
import SidebarIcon from "../components/sidebar/SidebarIcon";
import Header from "../components/header/Header";
import "../components/sidebar/styles.css"; // Ensure styles are included
import CardView from "../components/CardView"; // Import the CardView component 
import Process from "../images/greenn.png"; // Importing the process image


export default function Home() {
  return (
    <div className="home-container">
      <SidebarIcon />
      <div className="main-content">
        <Header />
        <div className="cards-section">
          <CardView />
        </div>
        <div className="image-text-container">
  <div className="text-box">
    <h3>Eco-Friendly Waste Disposal</h3>
    <p>
    "We are committed to ensuring that your waste is disposed 
    of responsibly. Our eco-friendly solutions focus on 
    recycling and minimizing landfill contributions. We handle everything from collection to sorting, 
    guaranteeing that your waste is processed in the most sustainable way possible."
    </p>
  </div>
  <div className="text-box">
    <h3>Scheduled Waste Pickups</h3>
    <p>
    "We offer flexible, scheduled waste collection services 
    tailored to your business needs. Whether you need daily, weekly,
     or monthly pickups, our team will ensure timely and hassle-free waste management to keep your
     premises clean and compliant with regulations."
</p>
  </div>
</div>
<img src={Process} alt="Waste Process" className="process-image" />




      </div>
    </div>
  );
}
