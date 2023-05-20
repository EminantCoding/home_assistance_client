import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const Exclamation = ({ color }) => {
  let iconColor =
    color === "error" ? "var(--error-color)" : "var(--primary-color)";
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <AiOutlineExclamationCircle />
    </span>
  );
};

Exclamation.propTypes = {
  color: PropTypes.string,
};

export default Exclamation;
