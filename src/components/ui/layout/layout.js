import React from "react";
import Header from "./header";
import Flexbox from "../flexbox";
import VerticalMenu from "../verticalMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Flexbox>
        <aside>
          <VerticalMenu />
        </aside>
        <main>{children}</main>
      </Flexbox>

      <div>footer</div>
    </>
  );
};

export default Layout;
