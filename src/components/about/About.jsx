import React from "react";
import "../../styles/about.css";

export const About = () => {
  return (
    <div className="about container">
      <div className="card">
        <div className="col text-white text-center fs-3">
          <div className="row-12 text-center">
            <h1>ABOUT</h1>
          </div>
          <div className="row">
            <div className="col-4 text-end">Author:</div>
            <div className="col-8">MietoProgramming</div>
          </div>
          <div className="row">
            <div className="col-4 text-end">Date:</div>
            <div className="col-8">03.2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};
