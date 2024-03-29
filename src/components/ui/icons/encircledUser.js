import React from "react";
import PropTypes from "prop-types";
import { BiUserCircle } from "react-icons/bi";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const EncircledUser = ({ color }) => {
  let iconColor =
    color === "error"
      ? "var(--error-color)"
      : color === "light"
      ? "var(--white-color)"
      : "var(--primary-color)";
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <BiUserCircle />
    </span>
  );
};

EncircledUser.propTypes = {
  color: PropTypes.string,
};

export default EncircledUser;
