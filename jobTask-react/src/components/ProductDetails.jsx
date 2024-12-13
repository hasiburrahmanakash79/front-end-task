import React, { useState } from "react";
import ProductOptions from "./ProductOptions";
import QuantityControl from "./QuantityControl";

export default function ProductDetails({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Default color

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedColor,
    });
  };

  return (
    <div className="flex flex-wrap border shadow-lg rounded-xl p-5">
      {/* Product Image */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-green-500 mb-1">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Color Selection */}
        <ProductOptions
          colors={product.colors}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />

        {/* Quantity Selection */}
        <QuantityControl quantity={quantity} onQuantityChange={setQuantity} />

        {/* Add to Cart Button */}
        <button
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
