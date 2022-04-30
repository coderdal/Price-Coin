import React, { useEffect } from "react";

import styles from "./Main.module.css";

import ImportantCurrencies from "./ImportantCurrencies/ImportantCurrencies.js";
import AllCurrencies from "./AllCurrencies/AllCurrencies";

import { useDispatch } from "react-redux";

import axios from "axios";

import { setMainData } from "../redux/maindataSlice";

import { setLoading } from "../redux/isloadingSlice";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        localStorage.setItem("currencies", [JSON.stringify(response.data)]);
        await dispatch(setMainData(response.data));
        await dispatch(setLoading(false));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    setInterval(() => {
      fetchData();
    }, 90000);
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <ImportantCurrencies />

      <AllCurrencies />
    </main>
  );
};

export default Main;
