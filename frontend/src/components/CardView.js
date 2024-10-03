import React from 'react';
import './CardView.css';

export default function CardView() {
  return (
    <div className="card-container">
      {/* Upcoming Collections Card */}
      <div className="card upcoming-collections">
        <div className="card-icon">📅</div> {/* You can replace with an image or icon */}
        <div className="card-content">
          <h2>Upcoming Collections</h2>
          <p>Next pickup on Oct 15</p>
          <div className="card-status">Scheduled</div>
        </div>
      </div>

      {/* Recycling Progress Card */}
      <div className="card recycling-progress">
        <div className="card-icon">♻️</div> {/* You can replace with an image or icon */}
        <div className="card-content">
          <h2>Recycling Progress</h2>
          <p>Monthly Target</p>
          <div className="card-status">75% Completed</div>
        </div>
      </div>

      {/* Manage Requests Card */}
      <div className="card manage-requests">
        <div className="card-icon">📋</div> {/* You can replace with an image or icon */}
        <div className="card-content">
          <h2>Manage Requests</h2>
          <p>3 Pending Requests</p>
          <div className="card-status">Pending</div>
        </div>
      </div>
    </div>
  );
}
