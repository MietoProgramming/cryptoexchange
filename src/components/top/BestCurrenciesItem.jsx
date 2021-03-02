import React from "react";

export const BestCurrenciesItem = ({ coin }) => {
  return (
    <div className="list-group-item list-group-item-action bg-dark my-3">
      <div className="d-flex justify-content-between text-white">
        <h1>{coin.Name}</h1>
        <small>{Math.round(coin.Price_usd * 100) / 100}$</small>
      </div>
      <h3 className="text-white">Prices:</h3>
      <div className="list-group list-group-flush text-warning">
        <li className="list-group-item bg-dark">
          Price_btc : {Math.round(coin.Price_btc * 10000000) / 10000000}₿
        </li>
        <li className="list-group-item bg-dark">
          Price_cny : {Math.round(coin.Price_cny * 100) / 100}¥
        </li>
        <li className="list-group-item bg-dark">
          Price_eur : {Math.round(coin.Price_eur * 100) / 100}€
        </li>
        <li className="list-group-item bg-dark">
          Price_gbp : {Math.round(coin.Price_gbp * 100) / 100}£
        </li>
      </div>
    </div>
  );
};
