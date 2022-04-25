import React, { useState, useEffect } from "react";

import styles from "./Exchange.module.css";

import TextField from "@mui/material/TextField";

const Exchange = () => {
  const coinsData = JSON.parse(localStorage.getItem("currencies"));

  const bitcoin = coinsData[0];

  const btcPrice = bitcoin.current_price;

  const [usdAmount, setUsdAmount] = useState("");
  const [btcAmount, setBtcAmount] = useState(0);

  
  const catchUsdChange = (value) => {
    if (!isNaN(value)) {
      setUsdAmount(value);
      doExchange();
    }
  };
  
  const catchBtcChange = (value) => {
    if (!isNaN(value)) {
      setBtcAmount(value);
      doExchange();
    }
  };
  const doExchange = (e) => {
    e && e.preventDefault();
    setBtcAmount(usdAmount / btcPrice);
  };

  useEffect(() => {
    doExchange();
  }, []);

  return (
    <section className={styles.exchange}>
      <div className={styles.container}>
        <h3 className={styles.text}>Exchange Currencies</h3>

        <h2 className={styles.text}>
          From <span className={styles.upper}>usd($)</span> to{" "}
          <span className={styles.upper}>btc(₿)</span>
        </h2>

        <div className={styles.inputBoxes}>
          <form onSubmit={(e) => doExchange(e)}>
            <TextField
              id="outlined-basic"
              label="USD ($)"
              variant="outlined"
              value={usdAmount}
              onChange={(e) => catchUsdChange(e.target.value)}
              required
              type="number"
              InputProps={{
                inputProps: { autoFocus: true, min: 0, step: "any" },
              }}
            />

            <TextField
              id="outlined-basic"
              label="BTC (₿)"
              variant="outlined"
              value={btcAmount}
              onChange={(e) => catchBtcChange(e.target.value)}
              required
              type="number"
              style={{ marginLeft: "20px" }}
              InputProps={{
                inputProps: { readOnly: true, min: 0, step: "any" },
              }}
            />

            <button type="submit" style={{ display: "none" }}>
              Exchange
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Exchange;
