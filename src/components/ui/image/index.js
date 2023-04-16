import React from "react";
import PropTypes from "prop-types";
import classes from "./image.module.css";

const Image = ({
  src,
  alt = "Image Loading Failed",
  styles = {},
  cls = "",
}) => {
  return (
    <div className={classes.image_container}>
      <img
        style={styles ? styles : {}}
        src="https://www.dropbox.com/s/u330jm6faybxrvb/fog-3461451_640.jpg?raw=1"
        className={cls ? `${cls} ${classes.image}` : `${classes.image}`}
        alt={alt}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.object,
  cls: PropTypes.string,
};

export default Image;
