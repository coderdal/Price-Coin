import React from "react";

import styles from "./CurrencyCard.module.css";

const CurrencyCard = ({ name, image, price }) => {
  return (
    <div className={styles.CurrencyCard}>
      <img src={image} className={styles.cardImage} alt="Currency Preview" />

      <h4>{name}</h4>

      <h4>{price}$</h4>
    </div>
  );
};

export default CurrencyCard;
