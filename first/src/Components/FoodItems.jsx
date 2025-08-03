import React from 'react';

const FoodItem = ({ name, image }) => {
  return (
    <div className="food-item text-center">
      <img src={`/images/${image}`} alt={name} className="w-24 h-24 mx-auto rounded-full shadow" />
      <p className="mt-2 text-gray-800 font-medium">{name}</p>
    </div>
  );
};

export default FoodItem;
