import React, { useState, useContext } from "react";
import "./WatchList.css";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(0, 209, 158, 0.7)",
          "rgba(255, 71, 87, 0.7)",
          "rgba(30, 144, 255, 0.7)",
          "rgba(255, 165, 2, 0.7)",
          "rgba(190, 46, 221, 0.7)",
          "rgba(47, 53, 66, 0.7)",
          "rgba(255, 234, 0, 0.7)",
          "rgba(0, 210, 211, 0.8)",
          "rgba(255, 159, 243, 0.7)",
          "rgba(164, 176, 190, 0.7)"
        ]
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <div className="trade-buttons">
        <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
          <button
            className="trade-btn buy"
            onClick={() => generalContext.openBuyWindow(uid, "BUY")}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
          <button
            className="trade-btn sell"
            onClick={() => generalContext.openBuyWindow(uid, "SELL")}
          >
            Sell
          </button>
        </Tooltip>
      </div>

      <div className="icon-buttons">
        <Tooltip title="Analytics (A)" arrow TransitionComponent={Grow}>
          <button className="icon-btn">
            <BarChartOutlined />
          </button>
        </Tooltip>

        <Tooltip title="More" arrow TransitionComponent={Grow}>
          <button className="icon-btn">
            <MoreHoriz />
          </button>
        </Tooltip>
      </div>
    </span>
  );
};
