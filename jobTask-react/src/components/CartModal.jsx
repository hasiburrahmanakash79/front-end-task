import React from "react";

export default function CartModal({ cartItems, total, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Color</th>
              <th className="py-2 px-4">Qty</th>
              <th className="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: item.selectedColor }}
                  ></div>
                </td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-lg font-medium">${total.toFixed(2)}</span>
        </div>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
