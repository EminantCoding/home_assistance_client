import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./checkbox.module.css";
const CheckBox = (props) => {
  const { label, onChange, name } = props;
  return (
    <Fragment>
      <label className={classes.checkbox_container}>
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
          className={classes.checkbox}
        />
        <span>{label}</span>
      </label>
    </Fragment>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  label: "",
  onChange: () => {},
};
export default CheckBox;
