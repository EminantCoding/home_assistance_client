import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const Close = ({ onClick, color = "" }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
      onClick={onClick}
    >
      <AiOutlineCloseCircle />
    </span>
  );
};
Close.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Close;
