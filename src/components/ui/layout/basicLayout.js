import React from "react";

const BasicLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div>footer</div>
    </>
  );
};

export default BasicLayout;
