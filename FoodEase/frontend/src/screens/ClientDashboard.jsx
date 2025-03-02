import React from "react";
import "./Dashboard.css";

const ClientDashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">FoodEase</nav>
      <div className="dashboard-content">
        <h2>Welcome, User!</h2>
        <p>Here are your recent orders and favorite restaurants.</p>
        <div className="dashboard-section">
          <h3>Recent Orders</h3>
          <ul>
            <li>Biryani - Delivered</li>
            <li>Pizza - Out for Delivery</li>
          </ul>
        </div>
        <div className="dashboard-section">
          <h3>Saved Addresses</h3>
          <p>123, Hyderabad, India</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;