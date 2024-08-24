import React from "react";
import wheelAlignmentBal from "../assets/wheel-alignment-bal.png";
import "../App.css";
const Service = () => {
  return (
    <>
      <div className="hero-wrapper col-12">
        <div
          className="container bg-white mt-3 hero"
          style={{ height: "19rem" }}
        >
          <span className="fw-bold p-2">Services offered by this dealer</span>
          {/* Adjust width and height as needed */}
          <div className=" d-flex mt-3 ">
            <div
              className="div-review text-center mx-5"
              style={{ height: "13rem", width: "15rem" }}
            >
              <img src={wheelAlignmentBal} alt="" className=" mt-2" />
              <h6 className="fw-bold mt-4">Wheel Balancing</h6>
              <button type="button" class="btn btn-danger mt-3">
                Book
              </button>
            </div>
            <div
              className="div-review text-center "
              style={{ height: "13rem", width: "15rem" }}
            >
              <img src={wheelAlignmentBal} alt="" className=" mt-2" />
              <h6 className="fw-bold mt-4">Wheel Balancing</h6>
              <button type="button" class="btn btn-danger mt-3">
                Book
              </button>
            </div>
          </div>
          {/* You can add more <Company /> components here if needed */}
        </div>
      </div>
    </>
  );
};

export default Service;
