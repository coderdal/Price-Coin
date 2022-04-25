import React from "react";

import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <div className={styles.brandLogo}>
          <Link to="/" className={styles.bigUrl}>
            <h1>PriceCoin</h1>
          </Link>
          <h4>
            Made By{" "}
            <a href="https://linkedin.com/muhammederdal">Muhammed Erdal</a>
          </h4>
        </div>

        <div className={styles.nav}>
          <ul>
            <li>
              <a
                href="https://linkedin.com/muhammederdal"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  color="primary"
                  sx={{ transform: "scale(2.5)" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/coderdal"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  color="secondary"
                  sx={{ transform: "scale(2.5)" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
