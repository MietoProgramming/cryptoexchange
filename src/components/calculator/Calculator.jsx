import React, { useEffect, useState } from "react";
import "../../styles/calculator.css";

export const Calculator = () => {
  const [currency, setCurrency] = useState([]); //TODO: implement redux and delete all data repeats
  const [topTenHighestValueCurrencies, setTopHighestValueCurrencies] = useState(
    []
  );
  const [inputCurrencyValue, setInputCurrencyValue] = useState(0);
  const [currentCurrenciesValues, setCurrentCurrenciesValues] = useState({
    firstValue: "",
    secondValue: "",
  });
  const [resultCurrencyValue, setResultCurrencyValue] = useState(0);
  const [lastCalculations, setLastCalculations] = useState([]);

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

    await setTopHighestValueCurrencies(
      curr.sort((a, b) => b.Volume_24h - a.Volume_24h).slice(0, 10)
    );
    setCurrentCurrenciesValues({
      firstValue: topTenHighestValueCurrencies[0],
      secondValue: topTenHighestValueCurrencies[0],
    });

    return curr;
  };

  const exchangeCurrencies = () => {
    if (
      currentCurrenciesValues.firstValue === undefined ||
      currentCurrenciesValues.secondValue === undefined
    ) {
      return;
    }

    const res =
      Math.floor(
        ((currentCurrenciesValues.firstValue.Price_usd * inputCurrencyValue) /
          currentCurrenciesValues.secondValue.Price_usd) *
          100
      ) / 100;
    console.log(res);
    setResultCurrencyValue(res);
    setLastCalculations((lastCalc) => [
      ...lastCalc,
      {
        firstName: currentCurrenciesValues.firstValue.Name,
        secondName: currentCurrenciesValues.secondValue.Name,
        firstValue: inputCurrencyValue,
        secondValue: res,
      },
    ]);
  };

  useEffect(() => {
    const getDataAsync = async () => {
      await setCurrency(getData());
    };
    getDataAsync();
  }, []);

  useEffect(() => {}, [lastCalculations]);

  return (
    <div className="col h-90vh">
      <div className="row justify-content-around">
        <div className="col-sm-12 col-md-4">
          <div className="card my-5">
            <select
              className="form-select mb-4"
              onChange={(s) =>
                setCurrentCurrenciesValues({
                  secondValue: currentCurrenciesValues.secondValue,
                  firstValue: topTenHighestValueCurrencies.filter(
                    (e) => e.Name == s.target.value
                  )[0],
                })
              }
            >
              <option value="-" selected>
                ------------
              </option>
              {topTenHighestValueCurrencies.map((e, index) => {
                return (
                  <option key={index} value={e.Name}>
                    {e.Name}
                  </option>
                );
              })}
            </select>
            <div className="input-group input-group-lg">
              <span className="input-group-text">Value:</span>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setInputCurrencyValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-2 text-center my-auto">
          <div
            className="btn btn-outline-warning btn-lg"
            onClick={() => exchangeCurrencies()}
          >
            Calculate
          </div>
        </div>

        <div className="col col-sm-12 col-md-4">
          <div className="card my-5">
            <select
              className="form-select mb-4"
              onChange={(s) =>
                setCurrentCurrenciesValues({
                  firstValue: currentCurrenciesValues.firstValue,
                  secondValue: topTenHighestValueCurrencies.filter(
                    (e) => e.Name == s.target.value
                  )[0],
                })
              }
            >
              <option value="-" selected>
                ------------
              </option>
              {topTenHighestValueCurrencies.map((e, index) => {
                return (
                  <option key={index} value={e.Name}>
                    {e.Name}
                  </option>
                );
              })}
            </select>
            <div className="input-group input-group-lg">
              <span className="input-group-text">Value:</span>
              <input
                type="text"
                className="form-control"
                value={resultCurrencyValue}
                disabled="disabled"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="card">
          <div className="text-center text-light">
            <h1>Last calculations</h1>
          </div>
          <div className="list-group list-group-flush text-warning">
            {lastCalculations.map((e, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item bg-transparent text-center"
                >
                  {e.firstName} {"=>"} {e.secondName} : <br /> {e.firstValue}{" "}
                  {"=>"} {e.secondValue}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
