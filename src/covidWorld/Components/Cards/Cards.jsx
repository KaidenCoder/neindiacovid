import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({
  data: {
    totalconfirmed,
    newconfirmed,
    totalrecovered,
    newrecovered,
    totaldeaths,
    newdeaths,
  },
}) => {
  if (!totalconfirmed) {
    return "Loading...";
    //   console.log(total);
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
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
              style={{
                fontSize: "18px",
                textAlign: "center",
                fontFamily: "monospace",
              }}
              gutterBottom
            >
              Total Confirmed in the World
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              <CountUp
                start={0}
                end={parseInt(totalconfirmed)}
                duration={2.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
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
              style={{
                fontSize: "18px",
                textAlign: "center",
                fontFamily: "monospace",
              }}
              gutterBottom
            >
              Total Recovered in the World
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              <CountUp
                start={0}
                end={parseInt(totalrecovered)}
                duration={2.5}
                separator=","
              />
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
              style={{
                fontSize: "18px",
                textAlign: "center",
                fontFamily: "monospace",
              }}
              gutterBottom
            >
              Total Deaths in the World
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              <CountUp
                start={0}
                end={parseInt(totaldeaths)}
                duration={2.5}
                separator=","
              />
            </Typography>
            {/* <Typography variant="body2">deaths</Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
