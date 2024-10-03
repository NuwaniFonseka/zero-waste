import React, { useState } from "react";
import SidebarIcon from "../components/sidebar/SidebarIcon";
import Header from "../components/header/Header";
import "../components/sidebar/styles.css"; // Ensure styles are included
import "./wasteHistory.css"; // Import custom styles for the waste history page

export default function WasteHistory() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for the waste collection history
  const wasteData = [
    { date: "2024-09-25", time: "10:00 AM", type: "Plastic", quantity: "50 kg", collectedBy: "John Doe", status: "Completed" },
    { date: "2024-09-26", time: "11:30 AM", type: "Organic", quantity: "30 kg", collectedBy: "Jane Smith", status: "Completed" },
    { date: "2024-09-27", time: "9:00 AM", type: "Paper", quantity: "20 kg", collectedBy: "Mike Johnson", status: "Pending" },
    // Add more sample data as needed
  ];

  const filteredData = wasteData.filter((entry) =>
    entry.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="waste-history-container">
      <SidebarIcon />
      <div className="main-content">
        <Header />
        {/* Move the search bar below the header */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by waste type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>
        <div className="table-container">
          <table className="waste-history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Type of Waste</th>
                <th>Quantity</th>
                <th>Collected By</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.time}</td>
                    <td>{entry.type}</td>
                    <td>{entry.quantity}</td>
                    <td>{entry.collectedBy}</td>
                    <td>{entry.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
