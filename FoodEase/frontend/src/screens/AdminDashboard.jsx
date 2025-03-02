import React from "react";
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">Admin Panel</nav>
      <div className="dashboard-content">
        <h2>Admin Dashboard</h2>
        <p>Manage restaurants, orders, and users.</p>
        <div className="dashboard-section">
          <h3>Restaurant Management</h3>
          <button>Add New Restaurant</button>
          <button>View All Restaurants</button>
        </div>
        <div className="dashboard-section">
          <h3>Order Management</h3>
          <button>View Pending Orders</button>
          <button>Completed Orders</button>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;