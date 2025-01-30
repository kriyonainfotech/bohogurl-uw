import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Style/orderinfo.css";

const Orderinfo = () => {
  const location = useLocation();
  const { cartItems, subtotal } = location.state || { cartItems: [], subtotal: 0 };

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    shipppingAdd: "",
    shipCity: "",
    shipState: "",
    shipZipcode: "",
    orderTotal: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Check if all fields are filled
    const {
      email,
      phone,
      address,
      city,
      state,
      zipcode,
      shipppingAdd,
      shipCity,
      shipState,
      shipZipcode,
    } = formData;

    if (
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !zipcode ||
      !shipppingAdd ||
      !shipCity ||
      !shipState ||
      !shipZipcode ||
      !subtotal
    ) {
      alert("All fields are required!");
      return;
    }

    const orderData = {
      ...formData,
      cartItems,
      orderTotal: subtotal,
    };

    console.log(orderData);

    try {
      const response = await axios.post("https://bohogurl.org/order", orderData);
      alert("Order Confirmed!");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to confirm order. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between p-5 font-sans">
        {/* Left Section - Forms */}
        <div className="flex-grow lg:mr-10">
          {/* My Information Form */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-5">My Information</h2>
            <form className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
              />
              <div className="address-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="zipcode"
                  placeholder="ZIP Code"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                  className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
                />
              </div>
            </form>
          </div>

          <div className="shipping-form">
            <h2 className="text-2xl font-bold mb-5">Shipping Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="shipppingAdd"
                placeholder="Shipping address"
                value={formData.shipppingAdd}
                onChange={handleInputChange}
                required
                className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
              />
              <div className="address-row2">
                <input
                  type="text"
                  name="shipCity"
                  placeholder="City"
                  value={formData.shipCity}
                  onChange={handleInputChange}
                  required
                  className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="shipState"
                  placeholder="State"
                  value={formData.shipState}
                  onChange={handleInputChange}
                  required
                  className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="shipZipcode"
                  placeholder="ZIP Code"
                  value={formData.shipZipcode}
                  onChange={handleInputChange}
                  required
                  className="w-full lg:w-4/5 p-3 border border-gray-300 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-[300px] mt-10 lg:mt-0 bg-white shadow-lg p-5 rounded-lg">
          <h2 className="text-xl font-bold mb-5">Order Total</h2>
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between text-gray-700">
                {item.name} <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-lg mt-5">
            Subtotal<span>₹{subtotal}</span>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-5 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-center font-medium text-lg"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </>
  );
};

export default Orderinfo;
