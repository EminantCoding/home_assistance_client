import React, { useEffect } from "react";
import classes from "./assetListing.module.css";
import AddNewAssetCard from "./addNewAssetCard";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { getAssetListing } from "@/store/assetSlice";
import AssetList from "./assetList";
import Head from "next/head";

const AssetListing = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice.count);
  const asset = useSelector((state) => state.assetSlice);
  const [cookies] = useCookies(["token"]);
  useEffect(() => {
    dispatch(getAssetListing({ token: cookies.token }));
  }, []);
  return (
    <div className={classes.asset_listing_container}>
      <Head>
        <title>Asset Listing - Home Assistance</title>
      </Head>
      <AddNewAssetCard />
      <AssetList assets={asset.assetList} />
    </div>
  );
};

export default AssetListing;
