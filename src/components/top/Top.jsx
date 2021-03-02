import React, { useEffect, useState } from "react";
import { cryptoKey } from "../../apiKeys.js";
import "../../styles/top.css";
import { TopFiveItem } from "./TopFiveItem";
import { BestCurrenciesItem } from "./BestCurrenciesItem";

export const Top = () => {
  const [currency, setCurrency] = useState([]);
  const [topFiveCurrencies, setTopFiveCurrencies] = useState([]);
  const [topTenHighestValueCurrencies, setTopHighestValueCurrencies] = useState(
    []
  );

  const getDataOnline = () =>
    fetch(`https://www.worldcoinindex.com/apiservice/json?key=${cryptoKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data));

  const getData = async () => {
    let curr;
    await fetch("../../currencyData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.Markets);
        curr = res.Markets;
      });

    setTopFiveCurrencies(
      curr.sort((a, b) => b.Volume_24h - a.Volume_24h).slice(0, 5)
    );

    setTopHighestValueCurrencies(
      curr.sort((a, b) => b.Volume_24h - a.Volume_24h).slice(0, 10)
    );

    return curr;
  };

  useEffect(async () => {
    await setCurrency(getData());
    // console.log(currency.Markets[0].Name);
    // const coins = await getData();
    // console.log(coins.Markets[0].Name); // TODO: example of using data
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col-12-md sidecard">
          <div className="card my-bg-grey text-white">
            <div className="card-header">Top 5</div>
            <div className="list-group list-group-flush">
              {topFiveCurrencies.map((c, index) => (
                <TopFiveItem key={index} name={c.Name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div>
          <div className="list-group">
            {topTenHighestValueCurrencies.map((c, index) => (
              <BestCurrenciesItem coin={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
