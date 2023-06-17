import React from "react";
import PropTypes from "prop-types";
import Card from "@/components/ui/card";
import classes from "./assetListing.module.css";
import Text from "@/components/ui/text";
import Flexbox from "@/components/ui/flexbox";
import Home from "@/components/ui/icons/home";
import Location from "@/components/ui/icons/location";
import User from "@/components/ui/icons/user";
import Button from "@/components/ui/button";

const AssetItem = (props) => {
  const { asset_name, registered_to, address } = props;
  console.log(props);
  return (
    <Card styles={{ width: 400 }}>
      <div className={classes.asset_item_container}>
        <Flexbox>
          <Home color="primary" />
          <Text
            styles={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--primary-color)",
            }}
          >
            {asset_name}
          </Text>
        </Flexbox>
        <Flexbox>
          <User color="primary" />
          <Text>{registered_to}</Text>
        </Flexbox>
        <Flexbox>
          <Location color="primary" />
          <Text>{address}</Text>
        </Flexbox>
        <hr />
        <Flexbox justifyContent="space-between" styles={{ marginTop: "1rem" }}>
          <Button text="Edit" />
          <Button text="Delete" />
        </Flexbox>
      </div>
    </Card>
  );
};

AssetItem.propTypes = {
  asset_name: PropTypes.string,
  _id: PropTypes.string,
};

export default AssetItem;
