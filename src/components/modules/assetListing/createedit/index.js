import React from "react";
import classes from "../assetListing.module.css";
import Card from "@/components/ui/card";
import Flexbox from "@/components/ui/flexbox";
import InputBox from "@/components/ui/inputBox";
import Text from "@/components/ui/text";
import Select from "@/components/ui/select";
import CheckBox from "@/components/ui/checkbox";
import TextArea from "@/components/ui/textArea";
import Button from "@/components/ui/button";

const CreateEditAsset = () => {
  const fansOptions = [
    { key: 1, label: "One" },
    { key: 2, label: "Two" },
    { key: 3, label: "Three" },
    { key: 4, label: "Four" },
    { key: 5, label: "Five" },
    { key: 6, label: "Six" },
  ];
  return (
    <div>
      <Text>Asset Create</Text>
      <Flexbox gap={20} alignItems="flex-start">
        <Card styles={{ width: 500 }}>
          <Text cls={classes.asset_create_edit_card_title}>Basic Details</Text>
          <hr />
          <InputBox labelText="Asset Name" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Registered Date" />
          <InputBox labelText="Land Tax Amount" />
        </Card>
        <Card styles={{ width: 500 }}>
          <Text cls={classes.asset_create_edit_card_title}>User Details</Text>
          <hr />
          <InputBox labelText="Asset Name" />
          <InputBox labelText="Asset Address" />
          <InputBox labelText="Registered Date" />
          <InputBox labelText="Land Tax Amount" />
        </Card>
        <Card styles={{ width: 500 }}>
          <Text cls={classes.asset_create_edit_card_title}>No. Of </Text>
          <hr />
          <InputBox labelText="Asset Address" />
          <Flexbox justifyContent="space-between">
            <CheckBox label="Has Sump" />
            <CheckBox label="Is Rented" />
          </Flexbox>
          <Select label="Number for Fans" options={fansOptions} />
          <TextArea labelText="Remarks" />
          <Flexbox justifyContent="flex-end">
            <Button text="back"></Button>
            <Button text="Clear"></Button>
            <Button text="Save"></Button>
          </Flexbox>
        </Card>
      </Flexbox>
    </div>
  );
};

export default CreateEditAsset;
