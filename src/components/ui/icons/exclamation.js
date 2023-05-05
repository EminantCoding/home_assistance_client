import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import classes from "./icons.module.css";

const Exclamation = ({ color }) => {
  let iconColor =
    color === "error" ? "var(--error-color)" : "var(--primary-color)";
  return (
    <span
      className={classes.icon_container}
      style={{ color: iconColor, right: 30 }}
    >
      <AiOutlineExclamationCircle />
    </span>
  );
};

Exclamation.propTypes = {
  color: PropTypes.string,
};

export default Exclamation;
