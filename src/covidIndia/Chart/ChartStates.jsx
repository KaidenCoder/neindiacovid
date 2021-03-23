import React, { useState, useEffect } from "react";
import { fetchStateWise } from "../apiIndia/fetchApi";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const ChartStates = () => {
  const [timeData, setTimeData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const timeData = await fetchStateWise();
      setTimeData(timeData);
      // console.log(timeData);
    };

    fetchAPI();
  }, []);

  const lineChart = timeData.length ? (
    <Line
      data={{
        labels: timeData.map(({ state }) => state),
        datasets: [
          {
            data: timeData.map(({ active }) => active),
            label: "Active(press here)",
            borderColor: "rgba(0,0,255,1)",
            backgroundColor: "rgba(0,0,255,0.4)",
            fill: true,
          },
          {
            data: timeData.map(({ confirmed }) => confirmed),
            label: "Confirmed(press here)",
            borderColor: "rgba(204,204,0)",
            backgroundColor: "rgba(204,204,0,0.3)",
            fill: true,
          },
          {
            data: timeData.map(({ recovered }) => recovered),
            label: "Recovered(press here)",
            borderColor: "green",
            backgroundColor: "rgba(0,255,0,0.4)",
            fill: true,
          },
          {
            data: timeData.map(({ deaths }) => deaths),
            label: "Deaths(press here)",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.8)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default ChartStates;
