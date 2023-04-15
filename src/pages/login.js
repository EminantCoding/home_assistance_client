import React from "react";
import UserLogin from "@/components/modules/login";
import BasicLayout from "@/components/ui/layout/basicLayout";

const Login = () => <UserLogin />;

Login.getLayout = (page) => <BasicLayout>{page}</BasicLayout>;

export default Login;
