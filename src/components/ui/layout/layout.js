import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div>header</div>
      <main>{children}</main>
      <div>footer</div>
    </>
  );
};

export default Layout;
