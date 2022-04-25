import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useSelector } from "react-redux";

const size = window.innerWidth;

let columns;

if (size > 750) {
  columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "image",
      headerName: "Image",
      flex: 0.7,
      renderCell: (params) => <img src={params.value} alt="coin" />,
    },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "price",
      headerName: "Price ($)",
      flex: 1,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
    {
      field: "day",
      headerName: "24h (%)",
      flex: 1,
      renderCell: (params) => (
        <div className={params.value < 0 ? "negative_price" : "positive_price"}>
          {params.value}
        </div>
      ),
    },
    {
      field: "high",
      headerName: "24h High ($)",
      flex: 1,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
    {
      field: "low",
      headerName: "24h Low ($)",
      flex: 1,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
    {
      field: "mktcap",
      headerName: "Mkt Cap ($)",
      flex: 1.2,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
  ];
} else {
  columns = [
    { field: "id", headerName: "ID", width: 35 },
    {
      field: "image",
      headerName: "Image",
      width: 70,
      renderCell: (params) => <img src={params.value} alt="coin" />,
    },
    { field: "name", headerName: "Name", width: 100 },
    {
      field: "price",
      headerName: "Price ($)",
      width: 100,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
    {
      field: "day",
      headerName: "24h ($)",
      width: 100,
      renderCell: (params) => (
        <div className={params.value < 0 ? "negative_price" : "positive_price"}>
          {params.value}
        </div>
      ),
    },
    {
      field: "high",
      headerName: "24h High ($)",
      width: 100,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
    {
      field: "low",
      headerName: "24h Low ($)",
      width: 100,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
    {
      field: "mktcap",
      headerName: "Mkt Cap ($)",
      width: 150,
      renderCell: (params) => <div className="price">{params.value}</div>,
    },
  ];
}

export default function DataTable() {
  let rows = [];

  const coinsData = useSelector((state) => state.maindata.value);

  coinsData.forEach((coin, index) => {
    rows = [
      ...rows,
      {
        id: index,
        symbol: coin.symbol,
        image: coin.image,
        name: coin.name,
        price: coin.current_price,
        day: coin.price_change_percentage_24h,
        high: coin.high_24h,
        low: coin.low_24h,
        mktcap: coin.market_cap,
      },
    ];
  });

  /*const asd = [
  { id: 1, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1235, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 2, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',  name: 'qwe', price: 112, day: -35.5, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 3, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 13, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 4, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 17, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 5, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 12, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 6, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 71, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 7, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 8, image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',  name: 'qwe', price: 176, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 9, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 10, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 11, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 12, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 13, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 14, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 15, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 16, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },
  { id: 17, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',  name: 'qwe', price: 1, day: 35, high: 5300, low: 4940, mktcap: 757141801647 },

];*/

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        initialState={{
          sorting: {
            sortModel: [{ field: "price", sort: "desc" }],
          },
        }}
      />
    </div>
  );
}
