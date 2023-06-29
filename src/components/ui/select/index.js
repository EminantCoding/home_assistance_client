import React from "react";
import PropTypes from "prop-types";
import classes from "./select.module.css";

const Select = (props) => {
  const {
    label = "",
    id = "",
    autofocus = false,
    onChange,
    options,
    name,
  } = props;
  return (
    <div className={classes.select_container}>
      <label htmlFor={id} className={classes.inputLabel}>
        {label}
      </label>
      <select
        id={id}
        autofocus={autofocus}
        className={classes.select}
        onChange={onChange}
        name={name}
      >
        <option value="0" disabled selected>
          {`please select ${label}`}
        </option>
        {options?.length &&
          options.map((option) => (
            <option value={option.key} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  autofocus: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Select;
