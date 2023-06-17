import React from "react";
import Header from "./header";
import Flexbox from "../flexbox";
import VerticalMenu from "../verticalMenu";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Flexbox alignItems="flex-start">
          <aside className={classes.aside_container}>
            <VerticalMenu />
          </aside>
          <section className={classes.main_container}>{children}</section>
        </Flexbox>
        <footer>
          <div>footer</div>
        </footer>
      </main>
    </>
  );
};

export default Layout;
