import React, { useState } from "react";

const ProductDetails = ({ productData, addToCart, cartCount, openModal }) => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product = productData[selectedColor];

  const handleAddToCart = () => {
    const item = {
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: product.price,
      total: product.price * quantity,
      image: product.image,
      model: product.model,
    };
    addToCart(item);
  };

  return (
    <div>
      <div className="container mx-auto border shadow-lg rounded-xl flex p-4">
        <div className="md:w-1/2 p-4">
          <img src={product.image} alt="Product" className="rounded-lg" />
        </div>
        <div className="flex-2 p-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-green-500 text-xl">${product.price.toFixed(2)}</p>
          <p>{product.reviews}</p>
          <p className="my-2">{product.description}</p>

          <div className="flex items-center gap-20 my-5">
            <div>
              <p className="text-slate-400">Type</p>
              <h1 className="font-bold">{product.type}</h1>
            </div>
            <div>
              <p className="text-slate-400">Type</p>
              <h1 className="font-bold">{product.model}</h1>
            </div>
          </div>
          <div className="options mt-4">
            <h4 className="font-semibold">Band Color</h4>
            <div className="flex gap-2 mt-2">
              {Object.keys(productData).map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Wrist Size</h4>
            <div className="flex gap-2 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`border px-3 py-1 ${
                    selectedSize === size
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <button
              className="border px-3 py-1"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="border px-3 py-1"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button
            className="bg-purple-500 text-white px-6 py-2 rounded-md mt-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <button
        className={` bg-orange-500 text-white px-6 py-2 rounded-md mt-4  ${
          cartCount > 0 ? "block" : "hidden"
        }`}
        onClick={openModal}
      >
        Checkout ({cartCount})
      </button>
    </div>
  );
};

export default ProductDetails;
