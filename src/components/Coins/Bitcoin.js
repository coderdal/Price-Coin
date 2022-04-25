import React from "react";
import Coin from "./Coin";

import styles from "./Bitcoin.module.css";

const Bitcoin = () => {
  const coinsData = JSON.parse(localStorage.getItem("currencies"));

  const bitcoin = coinsData[0];

  return (
    <section className={styles.coinSection}>
      <Coin
        name={bitcoin.name}
        price={bitcoin.current_price}
        image={bitcoin.image}
        symbol={bitcoin.symbol}
        marketCap={bitcoin.market_cap}
        totalSupply={bitcoin.total_supply}
        maxSupply={bitcoin.max_supply}
        dayHigh={bitcoin.high_24h}
        dayLow={bitcoin.low_24h}
        marketCapChangePerDay={bitcoin.market_cap_change_24h}
        ath={bitcoin.ath}
        priceChangePerDay={bitcoin.price_change_24h}
        priceChangePercentagePerDay={bitcoin.price_change_percentage_24h}
      />
    </section>
  );
};

export default Bitcoin;
