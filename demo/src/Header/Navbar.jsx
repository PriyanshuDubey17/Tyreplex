import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container  ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button">
            <i class="fa-solid fa-user"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Car Tyres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bike Tyres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tyre Pressure
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Commercial Tyres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accessories
                </a>
              </li>
            </ul>
            <div className="d-flex item-center" role="search">
              <span>
                {" "}
                <i class="fa-solid fa-user " style={{ fontSize: "20px" }}></i>
              </span>
              <h5 className=" p-2 mt-1" type="submit">
                Login
              </h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
