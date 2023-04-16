import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import Image from "../image";

const Card = ({ children }) => {
  return (
    <div className={styles.card_container}>
      <div class={styles.card_content}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
