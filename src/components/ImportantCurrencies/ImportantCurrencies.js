import React from "react";
import CurrencyCard from "./CurrencyCard";

import styles from "./ImportantCurrencies.module.css";

import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { Swiper, SwiperSlide } from "swiper/react";

import { useSelector } from "react-redux";

import "swiper/css";

import SwiperCore, { Autoplay } from "swiper";

import Skeleton from "@mui/material/Skeleton";

import Typography from "@mui/material/Typography";

SwiperCore.use([Autoplay]);

const ImportantCurrencies = () => {
  const isloading = useSelector((state) => state.isloading.value);

  const LoadingSkeleton = (
    <>
      <Typography component="div" variant="h3">
        <Skeleton />
      </Typography>
      <div className="skeleton" style={{ display: "flex", gap: "10px" }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
    </>
  );

  const coinsData = useSelector((state) => state.maindata.value);

  return isloading ? (
    LoadingSkeleton
  ) : (
    <>
      <h3 className={styles.sectionTitle}>
        Most Popular
        <Tooltip title="Most Popular Coins">
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </h3>

      <section className={styles.ImportantCurrencies}>
        <Swiper
          breakpoints={{
            370: {
              width: 370,
              slidesPerView: 1,
            },
            440: {
              width: 440,
              slidesPerView: 2,
            },
            660: {
              width: 660,
              slidesPerView: 3,
            },
            790: {
              width: 790,
              slidesPerView: 4,
            },
            890: {
              width: 890,
              slidesPerView: 5,
            },
            950: {
              width: 950,
              slidesPerView: 6,
            },
            1030: {
              width: 1030,
              slidesPerView: 7,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={7}
        >
          {coinsData.map((coin, index) => {
            return (
              index < 15 && (
                <SwiperSlide key={index}>
                  <CurrencyCard
                    name={coin.name}
                    image={coin.image}
                    price={coin.current_price}
                  />
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default ImportantCurrencies;
