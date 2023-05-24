import React from "react";
import classes from "./assetListing.module.css";
import AddNewAssetCard from "./addNewAssetCard";

const AssetListing = () => {
  return (
    <div className={classes.asset_listing_container}>
      <AddNewAssetCard />
    </div>
  );
};

export default AssetListing;
