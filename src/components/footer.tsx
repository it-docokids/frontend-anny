import React from "react";
import Image from "../assets/bg.png";
import "../App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <div id="footer">
      {" "}
      <Grid
        container
        sx={{
          background: "white",
          width: "1320px",
          height: "480px",
          color: "white",
        }}
      >
        <img
          src={Image}
          style={{
            zIndex: "0",
            width: "100%",
            position: "relative",
          }}
        />
        <Grid
          container
          justifyContent="center"
          sx={{
            position: "absolute",
            zIndex: "2",
            marginTop: "15%",
            textAling: "center",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Columna 1</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Columna 1</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Columna 1</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
