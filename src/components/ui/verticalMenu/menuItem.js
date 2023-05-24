import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./verticalMenu.module.css";
import Flexbox from "../flexbox";
import Icons from "../icons";
import NavLink from "../link";

const MenuItem = (props) => {
  const { id, path, label } = props;
  const getMenuIcons = (menuid) => {
    switch (Number(menuid)) {
      case 0:
        return Icons.home;
      default:
        return Icons.settings;
    }
  };

  return (
    <Fragment>
      <li className={classes.menu_item} key={id}>
        <Flexbox>
          {getMenuIcons(id)}
          <NavLink
            href={path}
            style={{ textDecoration: "none" }}
            label={label}
          />
        </Flexbox>
      </li>
    </Fragment>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object,
};

export default MenuItem;
