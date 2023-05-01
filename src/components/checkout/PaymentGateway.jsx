import React from "react";
import './payment.css';
function CheckoutForm() {
  return (
    <div className="container">
      <div className="colored"></div>
      <div className="info">
        <div className="price" style={{top:"10rem"}}>
          <span>$245.00</span>
          <span>Nice speaker : Quality</span>
        </div>
      </div>
      <div className="form">
        <h3>Payment informations</h3>
        <form action="" method="post">
          <label>PAYMENT METHOD</label>
          <span className="select">
            <select>
              <option value="VISA">VISA</option>
              <option value="MASTERCARD">MASTER CARD</option>
              <option value="AMERICAN EXPRESS">AMERICA EXPRESS</option>
            </select>
          </span>
          <label>CARDHOLDER'S NAME</label>
          <input type="text" name="name" />
          <label>CARD NUMBER</label>
          <input type="text" name="CCN" />
          <span className="expiry">
            <label>EXPIRATION DATE</label>
            <span className="select">
              <select className="small">
                <option value="MARCH">MARCH</option>
                <option value="MASTERCARD">APRIL</option>
                <option value="AMERICAN EXPRESS">MAY</option>
              </select>
            </span>
            <span className="select">
              <select className="small">
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
              </select>
            </span>
          </span>
          <span className="sec">
            <label>SECURITY CODE</label>
            <input type="text" name="sec" maxlength="4" />
          </span>

          <p>Your credit card information are Encrypted </p>
          <button>PURCHASE SAFELY</button>
        </form>
      </div>
    </div>
  );
}
export default CheckoutForm;
