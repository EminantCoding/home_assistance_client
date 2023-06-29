import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "../assetListing.module.css";
import Card from "@/components/ui/card";
import InputBox from "@/components/ui/inputBox";
import Text from "@/components/ui/text";
import DatePicker from "@/components/ui/datePicker";
import { useSelector } from "react-redux";
const AssetDetails = (props) => {
  const { onChange, onBlur, onClear } = props;
  const assetdata = useSelector((state) => state.formSlice);
  const { data: formData, errors } = assetdata;

  return (
    <Fragment>
      <Card styles={{ width: 500 }}>
        <Text cls={classes.asset_create_edit_card_title}>Asset Details</Text>
        <hr />
        <InputBox
          labelText="Asset Name"
          id="asset_name-input"
          name="asset_name"
          type="text"
          placeholder="Please provide Asset Name"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.asset_name}
          errors={errors}
          onClear={onClear}
        />
        <InputBox
          labelText="Asset Address"
          id="asset_address-input"
          name="address"
          type="text"
          placeholder="Please provide Asset address"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.address}
          errors={errors}
          onClear={onClear}
        />
        <InputBox
          labelText="Registered To"
          id="registered_to-input"
          name="registered_to"
          type="text"
          placeholder="Please provide Registered To"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.registered_to}
          errors={errors}
          onClear={onClear}
        />
        <DatePicker
          labelText="Registered Date"
          id="registered_date-input"
          name="registered_date"
          type="date"
          placeholder="Please provide Registered Date"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.registered_date}
          errors={errors}
          onClear={onClear}
        />
        <InputBox
          labelText="Land Tax Amount"
          id="land_tax_amount-input"
          name="land_tax_amount"
          type="number"
          placeholder="Please provide Land Tax Amount"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.land_tax_amount}
          errors={errors}
          onClear={onClear}
        />
      </Card>
    </Fragment>
  );
};

AssetDetails.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClear: PropTypes.func,
};
AssetDetails.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onClear: () => {},
};
export default AssetDetails;
