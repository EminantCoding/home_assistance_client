import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./textarea.module.css";
const TextArea = (props) => {
  const { rows, cols, value, onChange, styles, cls, name, labelText } = props;
  return (
    <Fragment>
      <div className={classes.textarea_container}>
        <label htmlFor={name} className={classes.input_label}>
          {labelText}
        </label>
        <textarea
          rows={rows}
          cols={cols}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </Fragment>
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  name: PropTypes.string,
};

TextArea.defaultProps = {
  label: "",
  onChange: () => {},
  styles: {},
  cls: "",
  rows: 5,
  cols: 9,
};
export default TextArea;
