import React from "react";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="text-start">
            <tr>
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Color</th>
              <th className="py-2 px-4">Size</th>
              <th className="py-2 px-4">Qty</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 flex items-center gap-5">
                  <img className="w-10 rounded" src={item.image}></img>
                  <p>{item.name}</p>
                  </td>
                <td className="py-2 px-4">{item.color}</td>
                <td className="py-2 px-4">{item.size}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">${item.total.toFixed(2)}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-red-500"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold">Total: ${total.toFixed(2)}</span>
          <button
            className="bg-gray-300 px-4 py-2 rounded-md"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
