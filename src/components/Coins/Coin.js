import React from "react";

import styles from "./Coin.module.css";

const Coin = ({
  name,
  price,
  image,
  symbol,
  marketCap,
  totalSupply,
  maxSupply,
  priceChangePerDay,
  dayHigh,
  dayLow,
  priceChangePercentagePerDay,
  marketCapChangePerDay,
  ath,
}) => {

  const priceChangePercent = priceChangePercentagePerDay && priceChangePercentagePerDay.toFixed(2);

  return (
    <div className={styles.Container}>
      <div className={styles.path}>
        <h4>Coins ➤ {name} Price</h4>
      </div>

      <div className={styles.coin}>
        <div className={styles.coinTopSide}>
          <div className={styles.leftSide}>
            <div className={styles.coinImg}>
              <img src={image} alt="coin" />
            </div>

            <div className={styles.coinTitle}>
              <h3>
                {name}
                <span className={styles.symbol}> ({symbol})</span>
              </h3>
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.coinBody}>
              <div className={styles.coinPrice}>
                <h2
                  className={
                    priceChangePercent < 0 ? styles.loss : styles.profit
                  }
                >
                  {price}$
                </h2>
              </div>
            </div>

            <div className={styles.changePerDay}>
              <h3
                className={priceChangePercent < 0 ? styles.loss : styles.profit}
              >
                {priceChangePercent}%
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.coinDetails}>
          <div className={styles.box}>
            <h4>
              24h High Price ($):{" "}
              <span className={styles.profit}>{dayHigh}$</span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              24h Low Price ($): <span className={styles.loss}>{dayLow}$</span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              Price Change 24h ($):{" "}
              <span
                className={`${
                  priceChangePercent < 0 ? styles.loss : styles.profit
                }`}
              >
                {priceChangePerDay}$
              </span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              ATH ($): <span className={styles.profit}>{ath}$</span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              Market Cap Change 24h ($):{" "}
              <span
                className={`${
                  marketCapChangePerDay < 0 ? styles.loss : styles.profit
                }`}
              >
                {marketCapChangePerDay}$
              </span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              Price Change 24h (%):
              <span
                className={`${
                  priceChangePercent < 0 ? styles.loss : styles.profit
                } ${styles.percent}`}
              >
                {priceChangePercent}
              </span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              Market Cap: <span>{marketCap}$</span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              Total Supply: <span>{totalSupply}$</span>
            </h4>
          </div>

          <div className={styles.box}>
            <h4>
              Max Supply: <span>{maxSupply}$</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
