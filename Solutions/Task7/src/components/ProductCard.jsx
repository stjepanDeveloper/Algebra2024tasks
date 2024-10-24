import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.imageUrl || "https://via.placehold.com/300x200"}
        alt="product-image"
      ></img>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h3>Price: {product.price}$</h3>
      <h3>Rating: {product.rating}</h3>
    </div>
  );
};

export default ProductCard;
