import React from "react";
import PropTypes from "prop-types";
import { BiBrightnessHalf } from "react-icons/bi";
import classes from "./icons.module.css";

const Settings = ({ color }) => {
  let iconColor =
    color === "error"
      ? "var(--error-color)"
      : color === "light"
      ? "var(--white-color)"
      : "var(--primary-color)";
  return (
    <span
      className={classes.icon_container}
      style={{ color: iconColor, right: 30 }}
    >
      <BiBrightnessHalf color="light" />
    </span>
  );
};

Settings.propTypes = {
  color: PropTypes.string,
};

export default Settings;
