import { cryptoKey } from "../apiKeys.js";

export const currenciesFetchReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ONLINE": {
      fetch(`https://www.worldcoinindex.com/apiservice/json?key=${cryptoKey}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.Markets);
          return res.Markets;
        })
        .catch((e) => undefined);
    }

    case "FETCH_OFFLINE": {
      fetch("currencyData.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.Markets);
          return [res.Markets];
        });
    }

    default:
      return state;
  }
};
