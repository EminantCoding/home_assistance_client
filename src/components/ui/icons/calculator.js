import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCalculator } from "react-icons/ai";
import classes from "./icons.module.css";

const Calculator = ({ color }) => {
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
      <AiOutlineCalculator />
    </span>
  );
};

Calculator.propTypes = {
  color: PropTypes.string,
};

export default Calculator;
