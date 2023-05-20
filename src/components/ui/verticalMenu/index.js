import React from "react";
import classes from "./verticalMenu.module.css";
import Flexbox from "../flexbox";
import Text from "../text";
import Home from "../icons/home";
import Settings from "../icons/settings";
import Calculator from "../icons/calculator";
import EncircledUser from "../icons/encircledUser";

const VerticalMenu = () => {
  return (
    <div className={classes.vertical_menu_container}>
      <ul className={classes.menu_list}>
        <li className={classes.menu_item}>
          <Flexbox>
            <Home />
            <Text styles={{ fontWeight: "500" }}>Dashboard</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Settings />
            <Text styles={{ fontWeight: "500" }}>Users</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Settings />
            <Text styles={{ fontWeight: "500" }}>Asset</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Calculator />
            <Text styles={{ fontWeight: "500" }}>Property Tax</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Calculator />
            <Text styles={{ fontWeight: "500" }}>Transaction</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Settings />
            <Text styles={{ fontWeight: "500" }}>Emergancy Contacts</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Home />
            <Text styles={{ fontWeight: "500" }}>Tenant Agreement</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Settings />
            <Text styles={{ fontWeight: "500" }}>Notification</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Calculator />
            <Text styles={{ fontWeight: "500" }}>Documents</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Home />
            <Text styles={{ fontWeight: "500" }}>Tenant Agreements</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <Settings />
            <Text styles={{ fontWeight: "500" }}>Reminders</Text>
          </Flexbox>
        </li>
        <li className={classes.menu_item}>
          <Flexbox>
            <EncircledUser />
            <Text styles={{ fontWeight: "500" }}>Proximities</Text>
          </Flexbox>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenu;
