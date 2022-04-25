import React, { useState } from "react";

import styles from "./Header.module.css";

import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const body = document.querySelector("body");

  const changeTheme = () => {
    body.classList.toggle("dark");
    setTheme(body.classList[0]);
  };

  return (
    <header className={styles.header}>
      <div className={styles.brandLogo}>
        <Link to="/">
          <h2>PriceCoin</h2>
        </Link>
      </div>

      <div>
        <Link to="/bitcoin">
          <Tooltip title="Bitcoin Stats">
            <IconButton>
              <CurrencyBitcoinIcon color="warning" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/exchange">
          <Tooltip title="Exchange">
            <IconButton>
              <CurrencyExchangeIcon color="warning" />
            </IconButton>
          </Tooltip>
        </Link>
      </div>

      <div>
        <Tooltip title="Switch Theme">
          <IconButton onClick={() => changeTheme()}>
            {" "}
            {theme ? (
              <Brightness7Icon color="error" />
            ) : (
              <Brightness3Icon color="error" />
            )}{" "}
          </IconButton>
        </Tooltip>
        <Tooltip title="Developer LinkedIn">
          <IconButton
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/muhammederdal/",
                "_blank"
              );
            }}
          >
            <LinkedInIcon color="primary" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
