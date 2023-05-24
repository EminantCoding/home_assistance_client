import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Fragment } from "react";
import Text from "../text";

const NavLink = ({ href, label = "" }) => {
  return (
    <Fragment>
      <Link href={href} style={{ textDecoration: "none" }}>
        <Text styles={{ fontWeight: "500" }}>{label}</Text>
      </Link>
    </Fragment>
  );
};

NavLink.propTypes = { href: PropTypes.string, label: PropTypes.string };

export default NavLink;
