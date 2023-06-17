import React from "react";
import PropTypes from "prop-types";
import { AiOutlineUser } from "react-icons/ai";
import classes from "./icons.module.css";
import { getIconColor } from "./common";

const User = ({ color, styles = {} }) => {
  return (
    <span
      className={classes.icon_container}
      style={{ color: getIconColor(color) }}
    >
      <AiOutlineUser color={color} style={styles} />
    </span>
  );
};
User.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.object,
};
export default User;
