import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Search from "../Search";
import Results from "../Results";
import Nominations from "../Nominations";
import jwt from "jsonwebtoken";

import { MAX_NOMINATIONS } from "../../utils/constants";

const Home = (props) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let nominations = props.location.pathname.slice(1);
    if (!nominations || nominations.length === 0) {
      nominations = localStorage.getItem("aarsh-nominations");
    }
    try {
      const decoded = jwt.verify(nominations, "aarsh-nominations").data;

      if (decoded && decoded.length > 0 && decoded.length < MAX_NOMINATIONS) {
        dispatch({ type: "SET_NOMINATIONS", payload: decoded });
      }
    } catch {}
  }, [props.location.pathname, dispatch]);
  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        style={{ marginTop: "4vh", textAlign: "center" }}
      >
        <div> The Shoppies</div>
      </Typography>
      <Grid container spacing={1}>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          style={{ margin: "10vw", marginTop: "1vh", marginBottom: "1vh" }}
        >
          <Search
            query={query}
            setQuery={(q) => {
              setQuery(q);
            }}
          />
        </Grid>
        <Grid
          container
          item
          spacing={3}
          style={{ margin: "40px", marginTop: "0px", marginBottom: 0 }}
          justify="center"
        >
          <Grid item xs={5}>
            <Paper
              elevation={3}
              style={{
                alignItems: "center",
                justify: "center",
                padding: "1vw",
                maxHeight: "60vh",
                overflow: "auto",
              }}
            >
              <Results query={query} />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper
              elevation={3}
              style={{
                alignItems: "center",
                justify: "center",
                padding: "1vw",
                maxHeight: "60vh",
                overflow: "auto",
              }}
            >
              <Nominations />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ position: "absolute", bottom: "10px", left: "48vw" }}>
        Made with ❤️ by{" "}
        <a href="https://aarsh.io" target="blank">
          aarsh.io
        </a>
      </div>
    </>
  );
};

export default Home;
