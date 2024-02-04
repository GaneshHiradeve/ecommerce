import React, { useState } from "react";
import "./Order.css";
import { useDispatch } from "react-redux";
import { PlaceOrder } from "../redux/action/note";
import {  Link,  useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Order = () => {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cash on delivery");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [count, setCount] = useState(1);

  let { price,product_id } = useParams();
  const [updatedprice, setUpdatedPrice] = useState(price);

  const Toastmessage = (message) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  

  const dispatch = useDispatch();
  const OrderHandler = async(e) => {
    e.preventDefault();

    if (count === 0) {
      Toastmessage("Value Can't be Zero");
    } else if (count < 0) {
      Toastmessage("Value Can't be Negative");
    } else {
      setUpdatedPrice(price * count);
      
    }

  dispatch(
      PlaceOrder(
        product_id,
        customerName,
        mobileNumber,
        address,
        payment,
        city,
        state,
        country,
        pinCode
      )

    );

  };
  return (
    <main id="main" classname="main">
      <section className="checkout">
        <form onSubmit={OrderHandler}>
          <h3>place your order</h3>
          <div className="flex">
            <div className="inputBox">
              <span>your name :</span>
              <input
                type="text"
                name="name"
                required
                placeholder="enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>your number :</span>
              <input
                type="text"
                name="number"
                required
                placeholder="enter your number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>

            <div className="inputBox">
              <span>address</span>
              <input
                type="text"
                name="address"
                required
                placeholder="e.g. flat no."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="inputBox">
              <span>payment method :</span>
              <select
                name="method"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="cash on delivery">cash on delivery</option>
                <option value="credit card">credit card</option>
                <option value="paypal">paypal</option>
                <option value="paytm">paytm</option>
              </select>
            </div>

            <div className="inputBox">
              <span>city :</span>
              <input
                type="text"
                name="city"
                required
                placeholder="e.g. mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>state :</span>
              <input
                type="text"
                name="state"
                required
                placeholder="e.g. maharashtra"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>country :</span>
              <input
                type="text"
                name="country"
                required
                placeholder="e.g. india"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>pin code :</span>
              <input
                type="text"
                name="pin_code"
                required
                placeholder="e.g. 123456"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>Total Price :</span>
              <h1>{updatedprice}</h1>
              <input
                type="number"
                name="count"
                required
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
          </div>
          
          <br />
         
          <input
            type="submit"
            defaultValue="order now"
            className="btn"
            name="order_btn"
         
          />
        
        </form> 
        <br />
        <Link to={'/purchase'}>
          <button
            type="submit"
            className="btn"
            name="order_btn"
         
          >Back to Shopping</button>
          </Link>
      </section>
      <ToastContainer />
    </main>
  );
};

export default Order;
