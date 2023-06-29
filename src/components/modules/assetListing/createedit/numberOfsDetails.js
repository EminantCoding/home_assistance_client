import React from "react";
import PropTypes from "prop-types";
import classes from "../assetListing.module.css";
import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import Select from "@/components/ui/select";
import { numberedOptions } from "./common";
import { useSelector } from "react-redux";

const NumberOfsDetails = (props) => {
  const { onChange } = props;
  const assetdata = useSelector((state) => state.formSlice);
  const { data: formData, errors } = assetdata;
  return (
    <Card styles={{ width: 500 }}>
      <Text cls={classes.asset_create_edit_card_title}>No. Ofs Details</Text>
      <hr />
      <Select
        label="Number for Fans"
        options={numberedOptions}
        id="number_of_fans-input"
        name="number_of_fans"
        onChange={onChange}
      />
      <Select
        label="Number for Doors"
        options={numberedOptions}
        id="number_of_doors-input"
        name="number_of_doors"
        onChange={onChange}
      />
      <Select
        label="Number for Windows"
        options={numberedOptions}
        id="number_of_windows-input"
        name="number_of_windows"
        onChange={onChange}
      />
      <Select
        label="Number for Taps"
        options={numberedOptions}
        id="number_of_taps-input"
        name="number_of_taps"
        onChange={onChange}
      />
      <Select
        label="Number for bulbs"
        options={numberedOptions}
        id="number_of_bulbs-input"
        name="number_of_bulbs"
        onChange={onChange}
      />
    </Card>
  );
};

NumberOfsDetails.propTypes = {
  onChange: PropTypes.func.isRequired,
};
NumberOfsDetails.defaultProps = {
  onChange: () => {},
};
export default NumberOfsDetails;
