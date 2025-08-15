import React from 'react';
import '../index.css'; 
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (name.toLowerCase() === 'pizza') {
      navigate('/pizza');
    } else if (name.toLowerCase() === 'burger') {
      navigate('/burger');
    } else if (name.toLowerCase() === 'pasta') {
      navigate('/pasta');
    } else if (name.toLowerCase() === 'momo') {
      navigate('/momo');
    } else if (name.toLowerCase() === 'chinese') {
      navigate('/chinese');
    } else if (name.toLowerCase() === 'cake') {
      navigate('/cake');
    } else if (name.toLowerCase() === 'shake') {
      navigate('/shake');
    } else if (name.toLowerCase() === 'sweets') {
      navigate('/sweets');
    } else if (name.toLowerCase() === 'beverages') {
      navigate('/beverages'); 
    } else {
      navigate(`/food/${id}`);
    }
  };

  return (
    <div className="food-card" onClick={handleClick}>
      <img src={image} alt={name} className="food-img" />
      <p className="food-name">{name}</p>
    </div>
  );
};

export default FoodItem;
