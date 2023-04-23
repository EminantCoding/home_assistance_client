import React, { useState } from "react";
import Button from "@/components/ui/button";
import InputBox from "@/components/ui/inputBox";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <InputBox
        id="login-email-input"
        value={email}
        name="email"
        type="email"
        placeholder="Please provide email"
        labelText="Email"
        onChange={(e) => setEmail(e.target.value)}
        errors={{ email: "Please enter valid email address" }}
      />
      <InputBox
        id="login-password-input"
        value={password}
        name="password"
        type="password"
        placeholder="Please provide password"
        labelText="Password"
        onChange={(e) => setPassword(e.target.value)}
        errors={{ password: "Please enter valid password address" }}
      />
      <div
        style={{
          margin: "15px 10px 15px 10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button text="Login" />
      </div>
    </div>
  );
};

export default LoginForm;
