import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import classes from "./icons.module.css";

const Exclamation = (props) => {
  return (
    <span className={classes.iconContainer}>
      <AiOutlineExclamationCircle />
    </span>
  );
};

Exclamation.propTypes = {};

export default Exclamation;
