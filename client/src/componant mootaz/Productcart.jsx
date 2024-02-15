import React, { useState } from "react";

const Productcart = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="w-full bg-white rounded shadow p-6">
            <div className="flex justify-between items-center">
              <div className="text-black font-medium">Product</div>
              <div className="text-black font-medium">Price</div>
              <div className="text-black font-medium">Quantity</div>
              <div className="text-black font-medium">Subtotal</div>
            </div>
            {/* Product Item 1 */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-4">
                <img className="w-16 h-12" src="" alt="" />
                <div>LCD Monitor</div>
              </div>
              <div>$000</div>
              <div className="flex items-center">
                <button className="border border-black rounded px-2">-</button>
                <span className="mx-2">1</span>
                <button className="border border-black rounded px-2">+</button>
              </div>
              <div>$000</div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mt-6">
            <button className="border border-black rounded px-4 py-2">
              Return To Shop
            </button>
            <button className="border border-black rounded px-4 py-2">
              Update Cart
            </button>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="border border-black rounded px-4 py-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="outline-none"
              />
            </div>
            <button className="bg-red-500 text-white rounded mx-4 px-4 py-2">
              Apply Coupon
            </button>
          </div>
          <div className="flex justify-end w-full">
            <div className="bg-white rounded shadow p-6 mt-6 flex-col justify-end">
              <div className="text-xl font-medium">Cart Total</div>
              <div className="flex justify-between items-center mt-4">
                <div>Subtotal:</div>
                <div>$000</div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>Shipping:</div>
                <div>Free</div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>Total:</div>
                <div>$000</div>
              </div>
              <button className="bg-red-500 text-white rounded px-4 py-2 mt-6">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcart;
