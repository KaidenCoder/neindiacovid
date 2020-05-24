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
    parseInt(fetchedState.barpetaactive) +
    parseInt(fetchedState.biswanathactive) +
    parseInt(fetchedState.bongaigaonactive) +
    parseInt(fetchedState.cacharactive) +
    parseInt(fetchedState.chirangactive) +
    parseInt(fetchedState.darrangactive) +
    parseInt(fetchedState.dhubriactive) +
    parseInt(fetchedState.dibrugarhactive) +
    parseInt(fetchedState.dimaactive) +
    parseInt(fetchedState.goalparaactive) +
    parseInt(fetchedState.golaghatactive) +
    parseInt(fetchedState.hailakandiactive) +
    parseInt(fetchedState.hojaiactive) +
    parseInt(fetchedState.jorhatactive) +
    parseInt(fetchedState.kamrupactive) +
    parseInt(fetchedState.kamrupmetroactive) +
    parseInt(fetchedState.karimganjactive) +
    parseInt(fetchedState.kokrajharactive) +
    parseInt(fetchedState.lakhimpuractive) +
    parseInt(fetchedState.morigaonactive) +
    parseInt(fetchedState.nagaonactive) +
    parseInt(fetchedState.nalbariactive) +
    parseInt(fetchedState.salmaraactive) +
    parseInt(fetchedState.sivasagaractive) +
    parseInt(fetchedState.sonitpuractive) +
    parseInt(fetchedState.tinsukiaactive) +
    parseInt(fetchedState.udalguriactive) +
    parseInt(fetchedState.westkarbiactive) +
    parseInt(fetchedState.unknownassamactive);
  const assamRecovered =
    parseInt(fetchedState.barpetarecovered) +
    parseInt(fetchedState.biswanathrecovered) +
    parseInt(fetchedState.bongaigaonrecovered) +
    parseInt(fetchedState.cacharrecovered) +
    parseInt(fetchedState.chirangrecovered) +
    parseInt(fetchedState.darrangrecovered) +
    parseInt(fetchedState.dhubrirecovered) +
    parseInt(fetchedState.dibrugarhrecovered) +
    parseInt(fetchedState.dimarecovered) +
    parseInt(fetchedState.goalpararecovered) +
    parseInt(fetchedState.golaghatrecovered) +
    parseInt(fetchedState.hailakandirecovered) +
    parseInt(fetchedState.hojairecovered) +
    parseInt(fetchedState.jorhatrecovered) +
    parseInt(fetchedState.kamruprecovered) +
    parseInt(fetchedState.kamrupmetrorecovered) +
    parseInt(fetchedState.karimganjrecovered) +
    parseInt(fetchedState.kokrajharrecovered) +
    parseInt(fetchedState.lakhimpurrecovered) +
    parseInt(fetchedState.morigaonrecovered) +
    parseInt(fetchedState.nagaonrecovered) +
    parseInt(fetchedState.nalbarirecovered) +
    parseInt(fetchedState.salmararecovered) +
    parseInt(fetchedState.sivasagarrecovered) +
    parseInt(fetchedState.sonitpurrecovered) +
    parseInt(fetchedState.tinsukiarecovered) +
    parseInt(fetchedState.udalgurirecovered) +
    parseInt(fetchedState.westkarbirecovered) +
    parseInt(fetchedState.unknownassamrecovered);
  const assamDeaths =
    parseInt(fetchedState.barpetadeceased) +
    parseInt(fetchedState.biswanathdeceased) +
    parseInt(fetchedState.bongaigaondeceased) +
    parseInt(fetchedState.cachardeceased) +
    parseInt(fetchedState.chirangdeceased) +
    parseInt(fetchedState.darrangdeceased) +
    parseInt(fetchedState.dhubrideceased) +
    parseInt(fetchedState.dibrugarhdeceased) +
    parseInt(fetchedState.dimadeceased) +
    parseInt(fetchedState.goalparadeceased) +
    parseInt(fetchedState.golaghatdeceased) +
    parseInt(fetchedState.hailakandideceased) +
    parseInt(fetchedState.hojaideceased) +
    parseInt(fetchedState.jorhatdeceased) +
    parseInt(fetchedState.kamrupdeceased) +
    parseInt(fetchedState.kamrupmetrodeceased) +
    parseInt(fetchedState.karimganjdeceased) +
    parseInt(fetchedState.kokrajhardeceased) +
    parseInt(fetchedState.lakhimpurdeceased) +
    parseInt(fetchedState.morigaondeceased) +
    parseInt(fetchedState.nagaondeceased) +
    parseInt(fetchedState.nalbarideceased) +
    parseInt(fetchedState.salmaradeceased) +
    parseInt(fetchedState.sivasagardeceased) +
    parseInt(fetchedState.sonitpurdeceased) +
    parseInt(fetchedState.tinsukiadeceased) +
    parseInt(fetchedState.udalgurideceased) +
    parseInt(fetchedState.westkarbideceased) +
    parseInt(fetchedState.unknownassamdeceased);
  const manipurActive =
    parseInt(fetchedState.churachandpuractive) +
    parseInt(fetchedState.imphalwestactive) +
    parseInt(fetchedState.imphaleastactive);
  const manipurRecovered =
    parseInt(fetchedState.churachandpurrecovered) +
    parseInt(fetchedState.imphalwestrecovered) +
    parseInt(fetchedState.imphaleastrecovered);
  const manipurDeaths =
    parseInt(fetchedState.churachandpurdeceased) +
    parseInt(fetchedState.imphalwestdeceased) +
    parseInt(fetchedState.imphaleastdeceased);
  const meghalayaActive =
    parseInt(fetchedState.eastkhasiactive) +
    parseInt(fetchedState.westgaroactive);
  const meghalayaRecovered =
    parseInt(fetchedState.eastkhasirecovered) +
    parseInt(fetchedState.westgarorecovered);
  const meghalayaDeaths =
    parseInt(fetchedState.eastkhasideceased) +
    parseInt(fetchedState.westgarodeceased);
  const mizoramActive = parseInt(fetchedState.aizawlactive);
  const mizoramRecovered = parseInt(fetchedState.aizawlrecovered);
  const mizoramDeaths = parseInt(fetchedState.aizawldeceased);
  // const nagalandTotal = parseInt(fetchedState.dimapur)
  const tripuraActive =
    parseInt(fetchedState.dhalaiactive) +
    parseInt(fetchedState.gomatiactive) +
    parseInt(fetchedState.khowaiactive) +
    parseInt(fetchedState.northtripuraactive);
  const tripuraRecovered =
    parseInt(fetchedState.dhalairecovered) +
    parseInt(fetchedState.gomatirecovered) +
    parseInt(fetchedState.khowairecovered) +
    parseInt(fetchedState.northtripurarecovered);
  const tripuraDeaths =
    parseInt(fetchedState.dhalaideceased) +
    parseInt(fetchedState.gomatideceased) +
    parseInt(fetchedState.khowaideceased) +
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
