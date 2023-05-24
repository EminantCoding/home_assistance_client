import PlusSquare from "@/components/ui/icons/plusSquare";
import Text from "@/components/ui/text";
import React from "react";
import { Fragment } from "react";
import classes from "./assetListing.module.css";

const AddNewAssetCard = () => {
  return (
    <Fragment>
      <button className={classes.plus_square_container} onClick={() => alert()}>
        <PlusSquare
          color="var(--primary-color)"
          styles={{ fontSize: "5rem" }}
        />
        <Text cls={classes.addnew_asset}>Add New</Text>
      </button>
    </Fragment>
  );
};

export default AddNewAssetCard;
