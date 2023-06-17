import React from "react";
import PropTypes from "prop-types";
import { AiOutlineEnvironment } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const Location = ({ color, styles = {} }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <AiOutlineEnvironment color={color} style={styles} />
    </span>
  );
};
Location.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.object,
};

export default Location;
