import React from "react";
import Apollo from "../assets/Apollo.webp";
import mainLogo from "../assets/img_main.png";
import "../App.css";

const SoldByDealer = () => {
  return (
    <>
      <div className="hero-wrapper col-12 mt-5">
        <div className="container bg-white mt-3   ">
          <span className="fw-bold p-2">Tyres sold by this Dealer</span>
          <div className="row">
            <div className="col-md-6 col-12"></div>
            <div className="col-md-6 col-12 d-flex justify-content-around">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle border"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false "
                >
                  Filter By
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle border"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false "
                >
                  Most Popular
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
              <a href="#" className="mt-1">
                {" "}
                advanced
              </a>
            </div>
          </div>
          <div className=" d-flex mt-3 ">
            <div className="row">
              <div className="col-md-4 col-12">
                <div
                  className="div-review  p-2 small-div"
                  style={{ width: "22rem" }}
                >
                  <div className="row ">
                    <div className="col-6">
                      <img
                        src={Apollo}
                        alt=""
                        className="mt-3"
                        style={{ height: "2rem", width: "10" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <p
                        class="warranty-tag"
                        style={{ backgroundColor: "#FFF1C5" }}
                      >
                        {" "}
                        5 Year Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">AMAZER 4G LIFE</p>
                  <p className="text-muted mt-4"> 145/80 R12</p>

                  <div className="row">
                    <div className="col-7">
                      <span
                        className=" rounded mx-1 "
                        style={{ backgroundColor: "#4CA72C", color: "white" }}
                      >
                        <i
                          class="fa-solid fa-star p-1"
                          style={{ fontSize: "11px " }}
                        ></i>
                        4
                      </span>

                      <a className="mx-3 text-muted ">2278 review</a>
                      <p className="mt-1 fw-bold"> &#x20B9; 3,618 </p>
                      <p style={{ color: "#4CA72C" }}>offer available</p>
                      <p className="text-muted">Tubeless</p>
                    </div>
                    <div className="col-5">
                      <img
                        src={mainLogo}
                        alt=""
                        style={{ height: "10rem", width: "10" }}
                        className="tyre-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                {" "}
                <div
                  className="div-review small-div p-2"
                  style={{ width: "22rem" }}
                >
                  <div className="row ">
                    <div className="col-6">
                      <img
                        src={Apollo}
                        alt=""
                        className="mt-3"
                        style={{ height: "2rem", width: "10" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <p
                        class="warranty-tag"
                        style={{ backgroundColor: "#FFF1C5" }}
                      >
                        {" "}
                        5 Year Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">AMAZER 4G LIFE</p>
                  <p className="text-muted mt-4"> 145/80 R12</p>

                  <div className="row">
                    <div className="col-7">
                      <span
                        className=" rounded mx-1 "
                        style={{ backgroundColor: "#4CA72C", color: "white" }}
                      >
                        <i
                          class="fa-solid fa-star p-1"
                          style={{ fontSize: "11px " }}
                        ></i>
                        4
                      </span>

                      <a className="mx-3 text-muted ">2278 review</a>
                      <p className="mt-1 fw-bold"> &#x20B9; 3,618 </p>
                      <p style={{ color: "#4CA72C" }}>offer available</p>
                      <p className="text-muted">Tubeless</p>
                    </div>
                    <div className="col-5">
                      <img
                        src={mainLogo}
                        alt=""
                        style={{ height: "10rem", width: "10" }}
                        className="tyre-img"
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="col-4">
                {" "}
                <div
                  className="div-review small-div p-2"
                  style={{ width: "22rem" }}
                >
                  <div className="row ">
                    <div className="col-6">
                      <img
                        src={Apollo}
                        alt=""
                        className="mt-3"
                        style={{ height: "2rem", width: "10" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <p
                        class="warranty-tag"
                        style={{ backgroundColor: "#FFF1C5" }}
                      >
                        {" "}
                        5 Year Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">AMAZER 4G LIFE</p>
                  <p className="text-muted mt-4"> 145/80 R12</p>

                  <div className="row">
                    <div className="col-7">
                      <span
                        className=" rounded mx-1 "
                        style={{ backgroundColor: "#4CA72C", color: "white" }}
                      >
                        <i
                          class="fa-solid fa-star p-1"
                          style={{ fontSize: "11px " }}
                        ></i>
                        4
                      </span>

                      <a className="mx-3 text-muted ">2278 review</a>
                      <p className="mt-1 fw-bold"> &#x20B9; 3,618 </p>
                      <p style={{ color: "#4CA72C" }}>offer available</p>
                      <p className="text-muted">Tubeless</p>
                    </div>
                    <div className="col-5">
                      <img
                        src={mainLogo}
                        alt=""
                        style={{ height: "10rem", width: "10" }}
                        className="tyre-img"
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          {/* You can add more <Company /> components here if needed */}

          <div className=" d-flex mt-3 ">
            <div className="row">
              <div className="col-md-4 col-12">
                <div
                  className="div-review small-div p-2"
                  style={{ width: "22rem" }}
                >
                  <div className="row ">
                    <div className="col-6">
                      <img
                        src={Apollo}
                        alt=""
                        className="mt-3"
                        style={{ height: "2rem", width: "10" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <p
                        class="warranty-tag"
                        style={{ backgroundColor: "#FFF1C5" }}
                      >
                        {" "}
                        5 Year Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">AMAZER 4G LIFE</p>
                  <p className="text-muted mt-4"> 145/80 R12</p>

                  <div className="row">
                    <div className="col-7">
                      <span
                        className=" rounded mx-1 "
                        style={{ backgroundColor: "#4CA72C", color: "white" }}
                      >
                        <i
                          class="fa-solid fa-star p-1"
                          style={{ fontSize: "11px " }}
                        ></i>
                        4
                      </span>

                      <a className="mx-3 text-muted ">2278 review</a>
                      <p className="mt-1 fw-bold"> &#x20B9; 3,618 </p>
                      <p style={{ color: "#4CA72C" }}>offer available</p>
                      <p className="text-muted">Tubeless</p>
                    </div>
                    <div className="col-5">
                      <img
                        src={mainLogo}
                        alt=""
                        style={{ height: "10rem", width: "10" }}
                        className="tyre-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                {" "}
                <div
                  className="div-review small-div p-2"
                  style={{ width: "22rem" }}
                >
                  <div className="row ">
                    <div className="col-6">
                      <img
                        src={Apollo}
                        alt=""
                        className="mt-3"
                        style={{ height: "2rem", width: "10" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <p
                        class="warranty-tag"
                        style={{ backgroundColor: "#FFF1C5" }}
                      >
                        {" "}
                        5 Year Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">AMAZER 4G LIFE</p>
                  <p className="text-muted mt-4"> 145/80 R12</p>

                  <div className="row">
                    <div className="col-7">
                      <span
                        className=" rounded mx-1 "
                        style={{ backgroundColor: "#4CA72C", color: "white" }}
                      >
                        <i
                          class="fa-solid fa-star p-1"
                          style={{ fontSize: "11px " }}
                        ></i>
                        4
                      </span>

                      <a className="mx-3 text-muted ">2278 review</a>
                      <p className="mt-1 fw-bold"> &#x20B9; 3,618 </p>
                      <p style={{ color: "#4CA72C" }}>offer available</p>
                      <p className="text-muted">Tubeless</p>
                    </div>
                    <div className="col-5">
                      <img
                        src={mainLogo}
                        alt=""
                        style={{ height: "10rem", width: "10" }}
                        className="tyre-img"
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="col-md-4 col-12">
                {" "}
                <div
                  className="div-review small-div p-2"
                  style={{ width: "22rem" }}
                >
                  <div className="row ">
                    <div className="col-6">
                      <img
                        src={Apollo}
                        alt=""
                        className="mt-3"
                        style={{ height: "2rem", width: "10" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <p
                        class="warranty-tag"
                        style={{ backgroundColor: "#FFF1C5" }}
                      >
                        {" "}
                        5 Year Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">AMAZER 4G LIFE</p>
                  <p className="text-muted mt-4"> 145/80 R12</p>

                  <div className="row">
                    <div className="col-7">
                      <span
                        className=" rounded mx-1 "
                        style={{ backgroundColor: "#4CA72C", color: "white" }}
                      >
                        <i
                          class="fa-solid fa-star p-1"
                          style={{ fontSize: "11px " }}
                        ></i>
                        4
                      </span>

                      <a className="mx-3 text-muted ">2278 review</a>
                      <p className="mt-1 fw-bold"> &#x20B9; 3,618 </p>
                      <p style={{ color: "#4CA72C" }}>offer available</p>
                      <p className="text-muted">Tubeless</p>
                    </div>
                    <div className="col-5">
                      <img
                        src={mainLogo}
                        alt=""
                        style={{ height: "10rem", width: "10" }}
                        className="tyre-img"
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoldByDealer;
