import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { fetchData } from "../api/fetchApi";
import cx from "classnames";
import styles from "./Summary.module.css";
// import CountUp from "react-countup";

const Summary = () => {
  const [fetchedState, setFetchedState] = useState([]);

  useEffect(() => {
    const fetchAPIState = async () => {
      const dailyData = await fetchData();
      setFetchedState(dailyData);
      //console.log(dailyData)
    };
    fetchAPIState();
  }, []);
  const arunachalActive = parseInt(fetchedState.lohitactive);
  const arunachalRecovered = parseInt(fetchedState.lohitrecovered);
  const arunachalDeaths = parseInt(fetchedState.lohitdeceased);
  const assamActive =
    parseInt(fetchedState.bongaigaonactive) +
    parseInt(fetchedState.cacharactive) +
    parseInt(fetchedState.dhubriactive) +
    parseInt(fetchedState.goalparaactive) +
    parseInt(fetchedState.golaghatactive) +
    parseInt(fetchedState.hailakandiactive) +
    parseInt(fetchedState.kamrupactive) +
    parseInt(fetchedState.kamrupmetroactive) +
    parseInt(fetchedState.karimganjactive) +
    parseInt(fetchedState.kokrajharactive) +
    parseInt(fetchedState.lakhimpuractive) +
    parseInt(fetchedState.morigaonactive) +
    parseInt(fetchedState.nalbariactive) +
    parseInt(fetchedState.salmaraactive) +
    parseInt(fetchedState.unknownassamactive);
  const assamRecovered =
    parseInt(fetchedState.bongaigaonrecovered) +
    parseInt(fetchedState.cacharrecovered) +
    parseInt(fetchedState.dhubrirecovered) +
    parseInt(fetchedState.goalpararecovered) +
    parseInt(fetchedState.golaghatrecovered) +
    parseInt(fetchedState.hailakandirecovered) +
    parseInt(fetchedState.kamruprecovered) +
    parseInt(fetchedState.kamrupmetrorecovered) +
    parseInt(fetchedState.karimganjrecovered) +
    parseInt(fetchedState.kokrajharrecovered) +
    parseInt(fetchedState.lakhimpurrecovered) +
    parseInt(fetchedState.morigaonrecovered) +
    parseInt(fetchedState.nalbarirecovered) +
    parseInt(fetchedState.salmararecovered) +
    parseInt(fetchedState.unknownassamrecovered);
  const assamDeaths =
    parseInt(fetchedState.bongaigaondeceased) +
    parseInt(fetchedState.cachardeceased) +
    parseInt(fetchedState.dhubrideceased) +
    parseInt(fetchedState.goalparadeceased) +
    parseInt(fetchedState.golaghatdeceased) +
    parseInt(fetchedState.hailakandideceased) +
    parseInt(fetchedState.kamrupdeceased) +
    parseInt(fetchedState.kamrupmetrodeceased) +
    parseInt(fetchedState.karimganjdeceased) +
    parseInt(fetchedState.kokrajhardeceased) +
    parseInt(fetchedState.lakhimpurdeceased) +
    parseInt(fetchedState.morigaondeceased) +
    parseInt(fetchedState.nalbarideceased) +
    parseInt(fetchedState.salmaradeceased) +
    parseInt(fetchedState.unknownassamdeceased);
  const manipurActive =
    parseInt(fetchedState.imphalwestactive) +
    parseInt(fetchedState.imphaleastactive);
  const manipurRecovered =
    parseInt(fetchedState.imphalwestrecovered) +
    parseInt(fetchedState.imphaleastrecovered);
  const manipurDeaths =
    parseInt(fetchedState.imphalwestdeceased) +
    parseInt(fetchedState.imphaleastdeceased);
  const meghalayaActive = parseInt(fetchedState.eastkhasiactive);
  const meghalayaRecovered = parseInt(fetchedState.eastkhasirecovered);
  const meghalayaDeaths = parseInt(fetchedState.eastkhasideceased);
  const mizoramActive = parseInt(fetchedState.aizawlactive);
  const mizoramRecovered = parseInt(fetchedState.aizawlrecovered);
  const mizoramDeaths = parseInt(fetchedState.aizawldeceased);
  // const nagalandTotal = parseInt(fetchedState.dimapur)
  const tripuraActive =
    parseInt(fetchedState.dhalaiactive) +
    parseInt(fetchedState.gomatiactive) +
    parseInt(fetchedState.northtripuraactive);
  const tripuraRecovered =
    parseInt(fetchedState.dhalairecovered) +
    parseInt(fetchedState.gomatirecovered) +
    parseInt(fetchedState.northtripurarecovered);
  const tripuraDeaths =
    parseInt(fetchedState.dhalaideceased) +
    parseInt(fetchedState.gomatideceased) +
    parseInt(fetchedState.northtripuradeceased);

  const active =
    arunachalActive +
    assamActive +
    manipurActive +
    meghalayaActive +
    mizoramActive +
    tripuraActive;
  const recovered =
    arunachalRecovered +
    assamRecovered +
    manipurRecovered +
    meghalayaRecovered +
    mizoramRecovered +
    tripuraRecovered;
  const deaths =
    arunachalDeaths +
    assamDeaths +
    manipurDeaths +
    meghalayaDeaths +
    mizoramDeaths +
    tripuraDeaths;
  //   if (!total) {
  //     return "Loading...";
  //     //   console.log(total);
  //   }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          {/* Card content detailing all the data from the url */}
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ fontSize: "18px", textAlign: "center" }}
              gutterBottom
            >
              Total Recovered Cases
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {recovered || "Loading.."}
              {/* <CountUp start={0} end={recovered} duration={2.5} separator="," /> */}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          {/* Card content detailing all the data from the url */}
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ fontSize: "18px", textAlign: "center" }}
              gutterBottom
            >
              Total Active Cases
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {active || "Loading.."}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          {/* Card content detailing all the data from the url */}
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ fontSize: "18px", textAlign: "center" }}
              gutterBottom
            >
              Total Deaths Cases
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {deaths || "Loading.."}
              {/* <CountUp start={0} end={deaths} duration={2.5} separator="," /> */}
            </Typography>
            {/* <Typography variant="body2">deaths</Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;
