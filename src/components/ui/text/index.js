import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./text.module.css";

const Text = (props) => {
  const { children, cls = "", styles = {} } = props;
  return (
    <Fragment>
      <p className={`${classes.text} ${cls || ""}`} style={styles || {}}>
        {children}
      </p>
    </Fragment>
  );
};

Text.propTypes = {
  cls: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node,
};

export default Text;
