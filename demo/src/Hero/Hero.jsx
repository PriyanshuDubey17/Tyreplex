import React from "react";
import "../App.css";
import Ceat from "../assets/ceat.png";
import colorCeat from "../assets/color-ceat.png";
import Review from "../Review/Review";
import logoPic from "../assets/p-logo.png";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper col-12">
        <div className="container bg-white mt-3 hero">
          <div className="row p-4">
            <div className="col-12 col-md-5 ">
              <h1
                style={{ fontSize: "25px", fontWeight: "700" }}
                className="p-2 heading"
              >
                SHREE HEMKUNT TYRES AND SERVICES
              </h1>
              <span
                className="px-1 rounded"
                style={{ backgroundColor: "#4CA72C", color: "white" }}
              >
                4.9
              </span>{" "}
              <i class="fa-solid fa-star yellow"></i>
              <i class="fa-solid fa-star yellow"></i>
              <i class="fa-solid fa-star yellow"></i>
              <i class="fa-solid fa-star yellow"></i>
              <a className="mx-5 review ">2278 review</a>
              <div className="d-flex ">
                {" "}
                <i class="fa-solid fa-location-dot mt-4 p-2"></i>{" "}
                <p className="mt-3 p-2">
                  {" "}
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
              <div className="d-flex">
                <i class="fa-regular fa-clock mt-1 p-2"></i>{" "}
                <p className=" p-2">
                  Open - Monday to Sunday - 10:00AM to 8:00PM
                </p>
              </div>
              <button type="button" class="btn btn-outline-danger px-5">
                Get Direction
              </button>
              <p className="mt-3 fw-bold">2278 Google Reviews</p>
            </div>
            <div className="col-12 col-md-7  d-flex divScroll">
              <div className="img mx-3">
                {" "}
                <img src={Ceat} alt="" />
              </div>
              <div className="img mx-3">
                <img src={Ceat} alt="" />
              </div>
              <div className="img mx-3">
                <img src={colorCeat} alt="" />
              </div>
              <div className="img mx-3">
                <img src={colorCeat} alt="" />
              </div>
            </div>
          </div>

          <div className=" d-flex divScroll ">
            <div className="mx-3 div-review">
              {" "}
              <Review
                logoPic={logoPic}
                tittle="Priyanshu"
                para="Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here."
              />
            </div>

            <div className="mx-3 div-review">
              {" "}
              <Review
                logoPic={logoPic}
                tittle="Ritanshu"
                para="Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here."
              />
            </div>

            <div className="mx-3 div-review">
              {" "}
              <Review
                logoPic={logoPic}
                tittle="Priya"
                para="Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here."
              />
            </div>

            <div className="mx-3 div-review">
              {" "}
              <Review
                logoPic={logoPic}
                tittle="Anshu"
                para="Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here."
              />
            </div>
            <div className="mx-3 div-review">
              {" "}
              <Review
                logoPic={logoPic}
                tittle="Priyans"
                para="Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here."
              />
            </div>
            <div className="mx-3 div-review">
              {" "}
              <Review
                logoPic={logoPic}
                tittle="Aliya"
                para="Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
