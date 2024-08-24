import React from "react";
import "../App.css";
import haveQuestionBg from "../assets/haveQuestion-bg.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container bg-white mt-3">
        <div className="row py-3" style={{ backgroundColor: "#FFEAAA" }}>
          <div className="col-md-5 col-12">
            <h5 className="mt-3">Have a question about Tyres?</h5>
            <p className="mt-1 text-muted">
              Get an answer in 24 hours from our experts.
            </p>
            <form>
              <input
                type="text"
                placeholder="Ask or search your question"
                className="p-2 mb-3 rounded-pill form-control"
              />
            </form>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
            {/* Empty column or place content here */}
          </div>
          <div className="col-md-3 col-12 d-flex justify-content-center align-items-center mt-5">
            <img
              src={haveQuestionBg}
              alt="Question Background"
              style={{ width: "100%", maxWidth: "6rem", height: "auto" }}
            />
          </div>
        </div>

        <div className="row border-bottom p-4">
          <div className="col-md-3 col-12 text-center text-md-left">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "1.5rem" }}
              className="mt-2"
            />
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <p style={{ marginLeft: "1.5rem" }}>
                <i className="fa-brands fa-facebook mx-5"></i>
              </p>
              <p>
                <i className="fa-brands fa-instagram "></i>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12 text-center text-md-left">
            <p className="text-muted">Who We Are</p>
            <p className="text-muted">Are you a Tyre Dealer?</p>
          </div>
          <div className="col-md-3 col-12 text-center text-md-left">
            <p className="text-muted">Who We Are</p>
            <p className="text-muted">Are you a Tyre Dealer?</p>
          </div>
          <div className="col-md-3 col-12 text-center text-md-left">
            <p className="text-muted">Who We Are</p>
            <p className="text-muted">Are you a Tyre Dealer?</p>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 text-center text-muted">
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
