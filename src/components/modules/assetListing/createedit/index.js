import React from "react";
import Flexbox from "@/components/ui/flexbox";
import Text from "@/components/ui/text";
import Head from "next/head";
import AssetDetails from "./assetDetails";
import NumberOfsDetails from "./numberOfsDetails";
import AccountDetails from "./accountDetails";
import { useSelector, useDispatch } from "react-redux";
import { setFormData, setFormValidity } from "@/store/form";
import { postAsset } from "@/store/assetSlice";

const CreateEditAsset = () => {
  const assetdata = useSelector((state) => state.formSlice);
  const { data: formData, errors } = assetdata;

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      dispatch(setFormData({ name, value: checked }));
      return;
    }
    dispatch(setFormData({ name, value }));
  };
  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    // dispatch(setFormData({ name, value }));
  };
  const onInputClear = (name) => {
    const value = "";
    dispatch(setFormData({ name, value }));
    dispatch(setFormValidity(true, {}));
  };

  const onSubmitHandler = (event) => {
    if (event) event.preventDefault();
    // const validationErrors = loginFormValidator(formData);
    // if (!validationErrors.isValid) {
    //   const param = {
    //     isvalid: validationErrors.isValid,
    //     errors: validationErrors.errors,
    //   };
    //   dispatch(setFormValidity(param));
    //   return;
    // }

    // dispatch(setFormValidity({ isvalid: true, errors: {} }));
    const asset = {
      asset_name: formData.asset_name,
      registered_to: formData.registered_to,
      registered_date: formData.registered_date,
      address: formData.address,
      land_tax_amount: formData.land_tax_amount,
      asset_account_number: formData.asset_account_number,
      asset_rr_number: formData.asset_rr_number,
      remarks: formData.remarks,
      features: {
        number_of_doors: formData.number_of_doors,
        number_of_windows: formData.number_of_windows,
        number_of_fans: formData.number_of_fans,
        number_of_taps: formData.number_of_taps,
        number_of_bulbs: formData.number_of_bulbs,
        has_sump: formData.has_sump,
        is_rented: formData.is_rented,
      },
    };

    dispatch(postAsset(asset));
  };
  return (
    <div>
      <Head>
        <title>Asset Create</title>
      </Head>
      <Text>Asset Create</Text>
      <form onSubmit={onSubmitHandler}>
        <Flexbox gap={20} alignItems="flex-start">
          <AssetDetails
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onClear={onInputClear}
          />
          <NumberOfsDetails
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onClear={onInputClear}
          />
          <AccountDetails
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onClear={onInputClear}
          />
        </Flexbox>
      </form>
    </div>
  );
};

export default CreateEditAsset;
