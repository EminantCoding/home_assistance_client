import React from "react";
import PropTypes from "prop-types";
import classes from "./inputBox.module.css";
import Exclamation from "../icons/exclamation";

const InputBox = (props) => {
  const {
    id,
    type = "text",
    onChange,
    value = "",
    cls = "",
    styles = {},
    name = "",
    labelText = "",
    errors = {},
  } = props;
  return (
    <div className={classes.inputContainer}>
      <label htmlFor={name} className={classes.inputLabel}>
        {labelText}
      </label>
      <div className={classes.inputBoxContainer}>
        <input
          id={id || name}
          type={type}
          onChange={onChange}
          className={`${classes.input} ${cls || ""}`}
          value={value || ""}
          style={styles || {}}
          name={name || ""}
        />
        <span className={classes.iconContainer}>
          <Exclamation />
        </span>
      </div>
      {name in errors && (
        <span className={classes.inputError}>{errors[name]}</span>
      )}
    </div>
  );
};

InputBox.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  cls: PropTypes.string,
  styles: PropTypes.object,
  name: PropTypes.string,
  labelText: PropTypes.string,
  errorText: PropTypes.string,
  errors: PropTypes.object,
};

export default InputBox;
