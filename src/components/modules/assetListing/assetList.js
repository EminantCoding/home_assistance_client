import React from "react";
import PropTypes from "prop-types";
import AssetItem from "./assetItem";
import classes from "./assetListing.module.css";

const AssetList = ({ assets }) => {
  return (
    <div className={classes.asset_container}>
      {assets.map((asset) => (
        <AssetItem {...asset} key={asset._id} />
      ))}
    </div>
  );
};

AssetList.propTypes = {
  assets: PropTypes.array,
};

export default AssetList;
