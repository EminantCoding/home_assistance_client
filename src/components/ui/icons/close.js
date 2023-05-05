import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import classes from "./icons.module.css";

const Close = ({ onClick }) => {
  return (
    <span className={classes.icon_container} onClick={onClick}>
      <AiOutlineCloseCircle />
    </span>
  );
};
Close.propTypes = {
  onClick: PropTypes.func,
};

export default Close;
