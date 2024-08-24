import React from "react";
import "../App.css";

const Payment = () => {
  return (
    <>
      <div className="hero-wrapper col-12">
        <div className="container bg-white mt-3 ">
          <div className="row ">
            <p className="fs-6 text-muted">
              Home / Tyre Dealers / Tyre Dealers Ghaziabad/ SHREE HEMKUNT TYRES
              AND SERVICES
            </p>
          </div>

          <div className="row div-review p-3">
            <h4>Payment Mode</h4>
            <div className="col-md-3 col-12">
              <p>Deposit to Account</p>
              <p>Credit Card/Debit Card</p>
              <p>Wallets (PayTM/PhonePe/Amazon etc.)</p>
            </div>
            <div className="col-md-2 col-12">
              <p>Net Banking</p>
              <p>UPI</p>
            </div>
            <div className="col-md-7 col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
