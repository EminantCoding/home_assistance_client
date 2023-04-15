import BasicLayout from "@/components/ui/layout/basicLayout";
import React from "react";

const Login = () => {
  return <div>login</div>;
};
Login.getLayout = function (page) {
  return <BasicLayout>{page}</BasicLayout>;
};
export default Login;
