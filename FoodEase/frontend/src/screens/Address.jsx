import React, { useState } from "react";
import "../styles/Address.css";

const Address = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, location: "Hyderabad, Telangana" },
    { id: 2, location: "Bangalore, Karnataka" },
  ]);
  
  return (
    <div className="address-container">
      <h2>Your Addresses</h2>
      {addresses.map((address) => (
        <div key={address.id} className="address-card">
          <p>{address.location}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <button className="add-address-btn">Add New Address</button>
    </div>
  );
};

export default Address;