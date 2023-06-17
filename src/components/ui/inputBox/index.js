import React from "react";
import PropTypes from "prop-types";
import classes from "./inputBox.module.css";
import Exclamation from "../icons/exclamation";
import Close from "../icons/close";

const InputBox = (props) => {
  const {
    id,
    type = "text",
    onChange,
    value = "",
    cls = "",
    styles = {},
    name = "",
    labelText = "text",
    onBlur,
    errors = {},
    onClear,
  } = props;
  const onClearClickHandler = () => {
    onClear(name);
  };
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
          onBlur={onBlur}
          className={`${classes.input} ${cls || ""}`}
          value={value || ""}
          style={styles || {}}
          name={name || ""}
        />
        <div className={classes.icon_container}>
          {value.length > 0 && (
            <Close onClick={onClearClickHandler} color="error" />
          )}
          {name in errors && <Exclamation color="error" />}
        </div>
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
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  cls: PropTypes.string,
  styles: PropTypes.object,
  name: PropTypes.string,
  labelText: PropTypes.string,
  errorText: PropTypes.string,
  errors: PropTypes.object,
};

export default InputBox;
