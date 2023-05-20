import React from "react";
import PropTypes from "prop-types";
import { BiBrightnessHalf } from "react-icons/bi";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const Settings = ({ color }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <BiBrightnessHalf color="light" />
    </span>
  );
};

Settings.propTypes = {
  color: PropTypes.string,
};
export default Settings;
