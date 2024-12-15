import { useState } from "react";
import ProductDetails from "./ProductDetails";
import CartModal from "./CartModal";
import image1 from "../assets/images/purple-watch.jpeg"
import image2 from "../assets/images/black-watch.jpeg"
import image3 from "../assets/images/blue-watch.jpeg"
import image4 from "../assets/images/cyan-watch.jpeg"

const productData = {
  purple: {
    name: "Classy Modern Smart Watch",
    price: 79.0,
    reviews: "(2 Reviews)",
    type: "Watch",
    model: "Forerunner 9090XWW",
    description:
      "I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    image: image1
  },
  black: {
    name: "Elegant Black Watch",
    price: 99.0,
    reviews: "(4 Reviews)",
    type: "Watch",
    model: "Forerunner 290XT",
    description:
      "I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    image: image2,
  },
  blue: {
    name: "Ocean Blue Smart Watch",
    price: 89.0,
    reviews: "(3 Reviews)",
    type: "Watch",
    model: "Forerunner 333XTS",
    description:
      "I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    image: image3
  },
  cyan: {
    name: "Cyan Premium Fitness Band",
    price: 69.0,
    reviews: "(5 Reviews)",
    type: "Watch",
    model: "Forerunner 2334KKL",
    description:
      "I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    image: image4,
  },
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <ProductDetails
        productData={productData}
        addToCart={addToCart}
        cartCount={cart.length}
        openModal={() => setModalOpen(true)}
      />
      {isModalOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default ProductPage;
