import React from "react";
import "../App.css";

const Company = ({ mrfLogo, para }) => {
  return (
    <div
      style={{ width: "10rem", height: "6rem" }}
      className="p-2 bg-white mt "
    >
      <div className="row d-flex justify-content-center">
        <img src={mrfLogo} alt="" style={{ height: "3rem", width: "6rem" }} />
      </div>
      <div className="row d-flex justify-content-center">{para}</div>
    </div>
  );
};

export default Company;
