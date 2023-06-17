import React from "react";
import classes from "../assetListing.module.css";
import Card from "@/components/ui/card";
import Flexbox from "@/components/ui/flexbox";
import InputBox from "@/components/ui/inputBox";
import Text from "@/components/ui/text";
import Select from "@/components/ui/select";

const CreateEditAsset = () => {
  return (
    <div>
      <Text>Asset Create</Text>
      <Flexbox gap={20}>
        <Card styles={{ width: 500 }}>
          <Text cls={classes.asset_create_edit_card_title}>User Details</Text>
          <hr />
          <InputBox labelText="Asset Name" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Registered Date" />
          <InputBox labelText="Land Tax Amount" />
        </Card>
        <Card styles={{ width: 500 }}>
          <Text cls={classes.asset_create_edit_card_title}>Basic Details</Text>
          <hr />
          <InputBox labelText="Asset Name" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Registered Date" />
          <InputBox labelText="Land Tax Amount" />
        </Card>
        <Card styles={{ width: 500 }}>
          <Text cls={classes.asset_create_edit_card_title}>No. Of </Text>
          <hr />
          <InputBox labelText="Asset Name" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Registered Date" />
          <Select label="Number for Fans" />
        </Card>
      </Flexbox>
    </div>
  );
};

export default CreateEditAsset;
