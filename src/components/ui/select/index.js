import React from "react";
import PropTypes from "prop-types";
import Text from "../text";
import classes from "./select.module.css";

const Select = (props) => {
  const { label = "", id = "" } = props;
  return (
    <div className={classes.select_container}>
      <label htmlFor={id} className={classes.inputLabel}>
        {label}
      </label>
      <select id={id} autofocus="true" className={classes.select}>
        <option value="1"> Option1 </option>
        <option value="2"> Option2 </option>
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
};

export default Select;
