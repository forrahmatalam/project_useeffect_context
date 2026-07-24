import React from "react";

const Cart = ({ addCart }) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">🛒 Cart</h1>

      {addCart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        addCart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 mb-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>

            <button className="bg-red-500 text-white px-3 py-2 rounded">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;