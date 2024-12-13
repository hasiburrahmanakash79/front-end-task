import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import CartModal from "./components/CartModal";

const sampleProduct = {
  name: "Smart Watch",
  image: "",
  price: 199.99,
  description: "A sleek and stylish smartwatch.",
  colors: ["rgb(190, 1, 190)", "black", "rgb(57, 57, 255)", "cyan"],
};

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <ProductDetails product={sampleProduct} onAddToCart={handleAddToCart} />
      {showCart && (
        <CartModal
          cartItems={cartItems}
          total={total}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  );
}
