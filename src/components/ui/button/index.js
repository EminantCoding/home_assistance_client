import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./button.module.css";

const Button = (props) => {
  const { text, onClick, type = "button" } = props;
  return (
    <Fragment>
      <button onClick={onClick} className={classes.button} type={type}>
        {text}
      </button>
    </Fragment>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
