import React from "react";
import { GoGlobe, GoRocket } from "react-icons/go";
import { IconContext } from "react-icons";

export const Main = () => {
  return (
    <div>
      <div className="bg-dark">
        <img src="./img/stats.jpg" alt="" className="img-fluid" />
        <div className="fs-1 text-over-img">Success is only one</div>
        <div className="fs-6 text-over-img mt-5">We ease your life quickly</div>
      </div>

      <div className="container">
        <div className="col">
          <div className="row my-4">
            <div className="col-6 text-end my-auto text-white">
              <IconContext.Provider value={{ style: { fontSize: "64px" } }}>
                <GoGlobe />
              </IconContext.Provider>
            </div>
            <div className="col-6 fs-4 text-white">
              Check prices of cryptocurrencies from entire world.
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="./img/btc.jpg" alt="" className="img-fluid" />
      </div>

      <div className="container">
        <div className="col">
          <div className="row my-4">
            <div className="col-6 fs-4 text-end text-white">
              Have the best information faster.
            </div>
            <div className="col-6 my-auto text-white">
              <IconContext.Provider value={{ style: { fontSize: "64px" } }}>
                <GoRocket />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
