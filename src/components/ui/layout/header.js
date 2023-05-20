import React from "react";
import classes from "./layout.module.css";
import Text from "../text";
import Calculator from "../icons/calculator";
import Settings from "../icons/settings";
import EncircledUser from "../icons/encircledUser";
import Flexbox from "../flexbox";
import Home from "../icons/home";

const Header = () => {
  return (
    <div className={classes.header_container}>
      <div>
        <Text styles={{ fontSize: "1.5rem", fontWeight: 600 }}>
          Home Assistant
        </Text>
      </div>
      <Flexbox>
        <Home />
        <Text styles={{ fontWeight: 600, color: "#fff" }}>
          Lakshmi Narasimha Nilaya
        </Text>
      </Flexbox>
      <Flexbox gap={10}>
        <Calculator />
        <Settings />
        <EncircledUser />
      </Flexbox>
    </div>
  );
};

export default Header;
