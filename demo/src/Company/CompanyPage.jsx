import React from "react";
import Company from "./Company";
import mrfLogo from "../assets/mrf-logo.jpeg";
import "../App.css";

const CompanyPage = () => {
  return (
    <div className="hero-wrapper col-12">
      <div className="container bg-white mt-3 hero" style={{ height: "10rem" }}>
        <div className="">
          <span className="fw-bold p-2">Deal In</span>
          {/* Adjust width and height as needed */}
          <div className=" d-flex  mt-3 divScroll">
            <div className=" mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
            <div className="mx-3 div-review">
              <Company mrfLogo={mrfLogo} para="MRF" />
            </div>
          </div>
          {/* You can add more <Company /> components here if needed */}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
