import React, { useEffect, useState } from "react";
import { cryptoKey } from "../../apiKeys.js";
import "../../styles/top.css";

export const Top = () => {
  const [currency, setCurrency] = useState([]);

  const getDataOnline = () =>
    fetch(`https://www.worldcoinindex.com/apiservice/json?key=${cryptoKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data));

  const getData = () =>
    fetch("../../currencyData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      });

  useEffect(async () => {
    const coins = await getData();
    console.log(coins.Markets[0].Name); // TODO: example of using data
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col-12-md sidecard">
          <div className="card">
            <div className="card-header">Top 5</div>
            <div className="list-group list-group-flush">
              <li className="list-group-item">BitCoin $</li>
              <li className="list-group-item">BitCoin $</li>
              <li className="list-group-item">BitCoin $</li>
              <li className="list-group-item">BitCoin $</li>
              <li className="list-group-item">BitCoin $</li>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div>
          <div className="list-group">
            <div className="list-group-item list-group-item-action bg-dark">
              <div className="d-flex justify-content-between">
                <h1>BitCoin</h1>
                <small>$8.37</small>
              </div>
              <h3>Prices:</h3>
              <div className="list-group list-group-flush text-warning">
                <li className="list-group-item bg-dark">
                  Price_btc : 0.00078805
                </li>
                <li className="list-group-item bg-dark">
                  Price_btc : 0.00078805
                </li>
                <li className="list-group-item bg-dark">
                  Price_btc : 0.00078805
                </li>
                <li className="list-group-item bg-dark">
                  Price_btc : 0.00078805
                </li>
                <li className="list-group-item bg-dark">
                  Price_btc : 0.00078805
                </li>
              </div>
            </div>

            <div className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between">
                <h1>BitCoin</h1>
                <small>$8.37</small>
              </div>
              <h3>Prices:</h3>
              <div className="list-group list-group-flush">
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
              </div>
            </div>
            <div className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between">
                <h1>BitCoin</h1>
                <small>$8.37</small>
              </div>
              <h3>Prices:</h3>
              <div className="list-group list-group-flush">
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
              </div>
            </div>
            <div className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between">
                <h1>BitCoin</h1>
                <small>$8.37</small>
              </div>
              <h3>Prices:</h3>
              <div className="list-group list-group-flush">
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
              </div>
            </div>
            <div className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between">
                <h1>BitCoin</h1>
                <small>$8.37</small>
              </div>
              <h3>Prices:</h3>
              <div className="list-group list-group-flush">
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
              </div>
            </div>
            <div className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between">
                <h1>BitCoin</h1>
                <small>$8.37</small>
              </div>
              <h3>Prices:</h3>
              <div className="list-group list-group-flush">
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
                <li className="list-group-item">Price_btc : 0.00078805</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
