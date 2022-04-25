import React from "react";

import Table from "./Table";

import styles from "./AllCurrencies.module.css";

import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import Typography from "@mui/material/Typography";

const AllCurrencies = () => {
  const isloading = useSelector((state) => state.isloading.value);

  const LoadingSkeleton = (
    <>
      <div
        className="textsSkeleton"
        style={{ marginTop: "60px", marginBottom: "5px" }}
      >
        <Typography component="div" variant="h3">
          <Skeleton />
        </Typography>
      </div>
      <Box sx={{ width: "100%" }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </>
  );

  return isloading ? (
    LoadingSkeleton
  ) : (
    <section className={styles.AllCurrencies}>
      <h3 className={styles.sectionTitle}>
        All Currencies
        <Tooltip title="List Of All Currencies">
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </h3>

      <Table />
    </section>
  );
};

export default AllCurrencies;
