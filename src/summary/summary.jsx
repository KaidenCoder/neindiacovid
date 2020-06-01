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
    parseInt(fetchedState.baksaactive) +
    parseInt(fetchedState.barpetaactive) +
    parseInt(fetchedState.biswanathactive) +
    parseInt(fetchedState.bongaigaonactive) +
    parseInt(fetchedState.cacharactive) +
    parseInt(fetchedState.charaideoactive) +
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
    parseInt(fetchedState.karbianglongactive) +
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
    parseInt(fetchedState.baksarecovered) +
    parseInt(fetchedState.barpetarecovered) +
    parseInt(fetchedState.biswanathrecovered) +
    parseInt(fetchedState.bongaigaonrecovered) +
    parseInt(fetchedState.cacharrecovered) +
    parseInt(fetchedState.charaideorecovered) +
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
    parseInt(fetchedState.karbianglongrecovered) +
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
    parseInt(fetchedState.baksadeceased) +
    parseInt(fetchedState.barpetadeceased) +
    parseInt(fetchedState.biswanathdeceased) +
    parseInt(fetchedState.bongaigaondeceased) +
    parseInt(fetchedState.cachardeceased) +
    parseInt(fetchedState.charaideodeceased) +
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
    parseInt(fetchedState.karbianglongdeceased) +
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
    parseInt(fetchedState.bishnupuractive) +
    parseInt(fetchedState.chandelactive) +
    parseInt(fetchedState.churachandpuractive) +
    parseInt(fetchedState.imphalwestactive) +
    parseInt(fetchedState.noneyactive) +
    parseInt(fetchedState.imphaleastactive) +
    parseInt(fetchedState.senapatiactive) +
    parseInt(fetchedState.thoubalactive) +
    parseInt(fetchedState.ukhrulactive);
  const manipurRecovered =
    parseInt(fetchedState.bishnupurrecovered) +
    parseInt(fetchedState.chandelrecovered) +
    parseInt(fetchedState.churachandpurrecovered) +
    parseInt(fetchedState.imphalwestrecovered) +
    parseInt(fetchedState.noneyrecovered) +
    parseInt(fetchedState.imphaleastrecovered) +
    parseInt(fetchedState.senapatirecovered) +
    parseInt(fetchedState.thoubalrecovered) +
    parseInt(fetchedState.ukhrulrecovered);
  const manipurDeaths =
    parseInt(fetchedState.bishnupurdeceased) +
    parseInt(fetchedState.chandeldeceased) +
    parseInt(fetchedState.churachandpurdeceased) +
    parseInt(fetchedState.imphalwestdeceased) +
    parseInt(fetchedState.noneydeceased) +
    parseInt(fetchedState.imphaleastdeceased) +
    parseInt(fetchedState.senapatideceased) +
    parseInt(fetchedState.thoubaldeceased) +
    parseInt(fetchedState.ukhruldeceased);
  const meghalayaActive =
    parseInt(fetchedState.eastkhasiactive) +
    parseInt(fetchedState.northgaroactive) +
    parseInt(fetchedState.southwestgaroactive) +
    parseInt(fetchedState.westgaroactive) +
    parseInt(fetchedState.westkhasiactive);
  const meghalayaRecovered =
    parseInt(fetchedState.eastkhasirecovered) +
    parseInt(fetchedState.northgarorecovered) +
    parseInt(fetchedState.southwestgarorecovered) +
    parseInt(fetchedState.westgarorecovered) +
    parseInt(fetchedState.westkhasirecovered);
  const meghalayaDeaths =
    parseInt(fetchedState.eastkhasideceased) +
    parseInt(fetchedState.northgarodeceased) +
    parseInt(fetchedState.southwestgarodeceased) +
    parseInt(fetchedState.westgarodeceased) +
    parseInt(fetchedState.westkhasideceased);
  const mizoramActive = parseInt(fetchedState.aizawlactive);
  const mizoramRecovered = parseInt(fetchedState.aizawlrecovered);
  const mizoramDeaths = parseInt(fetchedState.aizawldeceased);
  const nagalandActive =
    parseInt(fetchedState.dimapuractive) +
    parseInt(fetchedState.kohimaactive) +
    parseInt(fetchedState.tuensangactive);
  const nagalandRecovered =
    parseInt(fetchedState.dimapurrecovered) +
    parseInt(fetchedState.kohimarecovered) +
    parseInt(fetchedState.tuensangrecovered);
  const nagalandDeaths =
    parseInt(fetchedState.dimapurdeceased) +
    parseInt(fetchedState.kohimadeceased) +
    parseInt(fetchedState.tuensangdeceased);
  const sikkimActive = parseInt(fetchedState.southsikkimactive);
  const sikkimRecovered = parseInt(fetchedState.southsikkimrecovered);
  const sikkimDeaths = parseInt(fetchedState.southsikkimdeceased);
  const tripuraActive =
    parseInt(fetchedState.dhalaiactive) +
    parseInt(fetchedState.gomatiactive) +
    parseInt(fetchedState.khowaiactive) +
    parseInt(fetchedState.northtripuraactive) +
    parseInt(fetchedState.sipahijalaactive) +
    parseInt(fetchedState.southtripuraactive) +
    parseInt(fetchedState.unokotiactive) +
    parseInt(fetchedState.westtripuraactive);
  const tripuraRecovered =
    parseInt(fetchedState.dhalairecovered) +
    parseInt(fetchedState.gomatirecovered) +
    parseInt(fetchedState.khowairecovered) +
    parseInt(fetchedState.northtripurarecovered) +
    parseInt(fetchedState.sipahijalarecovered) +
    parseInt(fetchedState.southtripurarecovered) +
    parseInt(fetchedState.unokotirecovered) +
    parseInt(fetchedState.westtripurarecovered);
  const tripuraDeaths =
    parseInt(fetchedState.dhalaideceased) +
    parseInt(fetchedState.gomatideceased) +
    parseInt(fetchedState.khowaideceased) +
    parseInt(fetchedState.northtripuradeceased) +
    parseInt(fetchedState.sipahijaladeceased) +
    parseInt(fetchedState.southtripuradeceased) +
    parseInt(fetchedState.unokotideceased) +
    parseInt(fetchedState.westtripuradeceased);

  const active =
    arunachalActive +
    assamActive +
    manipurActive +
    meghalayaActive +
    mizoramActive +
    nagalandActive +
    sikkimActive +
    tripuraActive;
  const recovered =
    arunachalRecovered +
    assamRecovered +
    manipurRecovered +
    meghalayaRecovered +
    mizoramRecovered +
    nagalandRecovered +
    sikkimRecovered +
    tripuraRecovered;
  const deaths =
    arunachalDeaths +
    assamDeaths +
    manipurDeaths +
    meghalayaDeaths +
    mizoramDeaths +
    nagalandDeaths +
    sikkimDeaths +
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
