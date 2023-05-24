import React from "react";
import classes from "./verticalMenu.module.css";
import { adminVerticalMenues } from "@/utils/common";
import { useSelector } from "react-redux";
import MenuItem from "./menuItem";

const VerticalMenu = () => {
  const user = useSelector((state) => state.loginSlice.user);
  const menus = user.roleid === 1 ? adminVerticalMenues : adminVerticalMenues;

  return (
    <div className={classes.vertical_menu_container}>
      <ul className={classes.menu_list}>
        {menus.map((menu) => (
          <MenuItem key={menu.id} {...menu} />
        ))}
      </ul>
    </div>
  );
};

export default VerticalMenu;
