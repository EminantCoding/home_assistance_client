import React from "react";
import classes from "./login.module.css";
import Card from "@/components/ui/card";
import Image from "@/components/ui/image";

const UserLogin = () => {
  return (
    <div className={classes.login_container}>
      <Card>
        <Image
          src="https://www.dropbox.com/s/u330jm6faybxrvb/fog-3461451_640.jpg?raw=1"
          cls={classes.img}
          alt=""
        />
        hi
      </Card>
    </div>
  );
};

export default UserLogin;
