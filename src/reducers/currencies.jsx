import { cryptoKey } from "../../apiKeys.js";

const currenciesFetchReducer = async (state = [], action) => {
  switch (action.type) {
    case "FETCH_ONLINE":
      let curr;
      fetch(`https://www.worldcoinindex.com/apiservice/json?key=${cryptoKey}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.Markets);
          curr = res.Markets;
        })
        .catch((e) => undefined);
      return curr;
    case "FETCH_OFFLINE":
      let curr;
      fetch("%PUBLIC_URL%/currencyData.json", {
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
      return curr;
    default:
      return state;
  }
};
