import React from "react";

export default function QuantityControl({ quantity, onQuantityChange }) {
  return (
    <div className="flex items-center mt-4 gap-4">
      <button
        className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-200"
        onClick={() => onQuantityChange(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
