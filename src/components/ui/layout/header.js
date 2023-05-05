import React from "react";
import classes from "./layout.module.css";
import Text from "../text";
import Calculator from "../icons/calculator";
import Settings from "../icons/settings";
import EncircledUser from "../icons/encircledUser";

const Header = () => {
  return (
    <div className={classes.header_container}>
      <div>
        <Text styles={{ fontSize: "1.5rem", fontWeight: 600 }}>
          Home Assistant
        </Text>
      </div>
      <div>
        <Text styles={{ fontWeight: 600 }}>Lakshmi Narasimha Nilaya</Text>
      </div>
      <div>
        <Calculator />
        <Settings />
        <EncircledUser />
      </div>
    </div>
  );
};

export default Header;
