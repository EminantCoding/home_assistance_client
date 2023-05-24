import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCalculator } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const Calculator = ({ color }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <AiOutlineCalculator />
    </span>
  );
};

Calculator.propTypes = {
  color: PropTypes.string,
};

export default Calculator;
