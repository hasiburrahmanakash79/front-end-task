import React from "react";

export default function ProductOptions({ colors, selectedColor, onColorSelect }) {
  return (
    <div>
      <h4 className="font-medium text-gray-800 mb-2">Band Color</h4>
      <div className="flex gap-3">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full border ${
              selectedColor === color ? "ring-2 ring-purple-600" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}
