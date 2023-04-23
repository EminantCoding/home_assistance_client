import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./button.module.css";

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <Fragment>
      <button onClick={onClick} className={classes.button}>
        {text}
      </button>
    </Fragment>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
