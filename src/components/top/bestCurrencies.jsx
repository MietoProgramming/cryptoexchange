import React from "react";

export const bestCurrencies = (props) => {
  return (
    <div className="list-group-item list-group-item-action bg-dark">
      <div className="d-flex justify-content-between">
        <h1>{props.Name}</h1>
        <small>{floor(props.Price_usd, 2)}</small>
      </div>
      <h3>Prices:</h3>
      <div className="list-group list-group-flush text-warning">
        <li className="list-group-item bg-dark">
          Price_btc : {floor(props.Price_btc, 2)}
        </li>
        <li className="list-group-item bg-dark">
          Price_cny : {floor(props.Price_cny, 2)}
        </li>
        <li className="list-group-item bg-dark">
          Price_eur : {floor(props.Price_eur, 2)}
        </li>
        <li className="list-group-item bg-dark">
          Price_gbp : {floor(props.Price_gbp, 2)}
        </li>
      </div>
    </div>
  );
};
