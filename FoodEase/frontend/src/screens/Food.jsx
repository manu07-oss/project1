import React from "react";
import "../styles/Food.css";

const Food = () => {
  const foodItems = [
    { id: 1, name: "Dosa", price: 80, category: "South Indian" },
    { id: 2, name: "Pasta", price: 200, category: "Italian" },
    { id: 3, name: "Manchurian", price: 150, category: "Chinese" },
  ];
  
  return (
    <div className="food-container">
      <h2>Menu</h2>
      {foodItems.map((food) => (
        <div key={food.id} className="food-card">
          <h4>{food.name}</h4>
          <p>Price: ₹{food.price}</p>
          <p>Category: {food.category}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Food;