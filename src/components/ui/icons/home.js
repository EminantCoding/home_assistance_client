import React from "react";
import PropTypes from "prop-types";
import { AiOutlineHome } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const Home = ({ color }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <AiOutlineHome color="light" />
    </span>
  );
};

Home.propTypes = {
  color: PropTypes.string,
};

export default Home;
