import React from "react";
import "../styles/Orders.css";

const Orders = () => {
  const orders = [
    { id: 1, item: "Chicken Biryani", price: 250, status: "Delivered" },
    { id: 2, item: "Veg Pizza", price: 350, status: "On the way" },
  ];

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h4>{order.item}</h4>
            <p>Price: ₹{order.price}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default Orders;