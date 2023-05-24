import React from "react";
import PropTypes from "prop-types";
import { AiOutlinePlusSquare } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const PlusSquare = ({ color, styles = {} }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <AiOutlinePlusSquare color={color} style={styles} />
    </span>
  );
};
PlusSquare.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.object,
};
export default PlusSquare;
