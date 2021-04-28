import React from "react";
import { Paper, Typography, InputBase, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../utils/api";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    padding: "2px 6px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Search = ({ query, setQuery }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const submit = (query) => {
    if (query.length > 0) {
      searchMovie(query)
        .then((res) => {
          dispatch({ type: "SET_RESULTS", payload: res.data.Search });
        })
        .catch((err) => alert("OMDB error ", err));
    }
  };
  return (
    <>
      <Typography variant="h5" component="h5">
        Movie Titles
      </Typography>

      <Paper onSubmit={submit} className={classes.root}>
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          disabled={query.length === 0}
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Search OMDB Movies"
          inputProps={{ "aria-label": "search OMDB movies" }}
          onChange={async (e) => {
            setQuery(e.target.value);
            submit(e.target.value);
          }}
        />
      </Paper>
    </>
  );
};

export default Search;
