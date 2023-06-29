import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./datePicker.module.css";

const DatePicker = (props) => {
  const {
    id,
    type = "text",
    onChange,
    value = "",
    cls = "",
    styles = {},
    name = "",
    labelText = "",
    onBlur,
    errors = {},
    onClear,
  } = props;
  return (
    <div className={classes.datepicker_container}>
      <label htmlFor={name} className={classes.datepicker_label}>
        {labelText}
      </label>
      <div className={classes.datepicker_wrap}>
        <input
          id={id || name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          className={`${classes.datepicker} ${cls || ""}`}
          value={value || ""}
          style={styles || {}}
          name={name || ""}
          placeholder={`please enter ${labelText}`}
        />
        {/* <div className={classes.icon_container}>
          {value.length > 0 && (
            <Close onClick={onClearClickHandler} color="error" />
          )}
          {name in errors && <Exclamation color="error" />}
        </div> */}
      </div>
      {name in errors && (
        <span className={classes.inputError}>{errors[name]}</span>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  labelText: PropTypes.string.isRequired,
};

DatePicker.defaultProps = {
  labelText: "",
  type: "date",
};

export default DatePicker;
