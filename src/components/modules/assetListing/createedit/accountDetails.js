import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "../assetListing.module.css";
import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import InputBox from "@/components/ui/inputBox";
import Flexbox from "@/components/ui/flexbox";
import CheckBox from "@/components/ui/checkbox";
import AssetActionButtons from "./assetActionButtons";
import TextArea from "@/components/ui/textArea";
import { useSelector } from "react-redux";

const AccountDetails = (props) => {
  const { onChange, onBlur, onClear } = props;
  const assetdata = useSelector((state) => state.formSlice);
  const { data: formData, errors } = assetdata;
  return (
    <Fragment>
      <Card styles={{ width: 500 }}>
        <Text cls={classes.asset_create_edit_card_title}>Account Details</Text>
        <hr />
        <InputBox
          labelText="RR Number"
          id="asset_rr_number-input"
          name="asset_rr_number"
          type="text"
          placeholder="Please provide RR Number"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.asset_rr_number}
          errors={errors}
          onClear={onClear}
        />
        <InputBox
          labelText="Account Number"
          id="asset_account_number-input"
          name="asset_account_number"
          type="text"
          placeholder="Please provide Account Number"
          onChange={onChange}
          onBlur={onBlur}
          value={formData.asset_account_number}
          errors={errors}
          onClear={onClear}
        />
        <Flexbox justifyContent="space-between">
          <CheckBox label="Has Sump" onChange={onChange} name="has_sump" />
          <CheckBox label="Is Rented" onChange={onChange} name="is_rented" />
        </Flexbox>
        <TextArea
          labelText="Remarks"
          id="remarks-input"
          name="remarks"
          value={formData.remarks}
          onChange={onChange}
          onBlur={onBlur}
          onClear={onClear}
          placeholder="Please provide Remarks"
        />
        <AssetActionButtons />
      </Card>
    </Fragment>
  );
};

AccountDetails.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClear: PropTypes.func,
};
AccountDetails.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onClear: () => {},
};
export default AccountDetails;
