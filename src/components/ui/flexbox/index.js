import React from "react";
import PropTypes from "prop-types";
import classes from "./flexbox.module.css";

const Flexbox = (props) => {
  const {
    cls = "",
    justifyContent = "flex-start",
    alignItems = "center",
    gap = 10,
    children,
    styles = {},
  } = props;
  return (
    <div
      className={`${classes.flex_container} ${cls && cls}`}
      style={{
        ...styles,
        gap: `${gap}px`,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </div>
  );
};

Flexbox.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.node,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  gap: PropTypes.number,
};

export default Flexbox;
