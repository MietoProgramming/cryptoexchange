import React from "react";
import { IconContext } from "react-icons";
import { BsGraphUp } from "react-icons/bs";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <IconContext.Provider value={{ className: "text-warning" }}>
            <BsGraphUp />
          </IconContext.Provider>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/top" className="nav-link" aria-current="page">
                TOP 10
              </a>
            </li>
            <li className="nav-item">
              <a href="/calculator" className="nav-link" aria-current="page">
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link" aria-current="page">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
