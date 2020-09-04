import React from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import logo from "../../assets/image/logo.png";
import { changeTheme } from "../../Redux/Theme/ThemeActions";
import "./Header.scss";

const useStyle = makeStyles({
  items: {
    display: "flex",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  Header: {
    paddingBottom: "1rem",
  },
  image: {
    width: "10rem",
    height: "8rem",
    paddingTop: "1.2rem",
  },
});

function Header({ darkMode, changeTheme }) {
  const ToDo = useSelector((state) => state.ToDo);

  const classes = useStyle();

  return (
    <header data-aos={"fade-left"} className={classes.Header}>
      <Card>
        <Grid container className={classes.items}>
          <Grid item className={classes.item} xs={4}>
          </Grid>
          <Grid item className={classes.item} xs={4}>
            <Box justifyContent="center" alignItems="center">
              <img src={logo} className={classes.image} />
            </Box>
            <h1 className="font">React-Todo</h1>
          </Grid>
          <Grid item className={classes.item} xs={4}>
            <Box justifyContent="center">
            </Box>
          </Grid>
        </Grid>
      </Card>
    </header>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.Theme.darkMode,
});

export default connect(mapStateToProps, { changeTheme })(Header);
