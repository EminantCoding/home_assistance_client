import React from "react";
import PropTypes from "prop-types";
import classes from "./card.module.css";

const Card = ({ cls = "", styles = {}, children }) => {
  return (
    <div className={`${classes.card_container} ${cls || ""}`} style={styles}>
      <div className={classes.card_content}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  cls: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node,
};

export default Card;
