import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Flexbox from "@/components/ui/flexbox";
import Button from "@/components/ui/button";

const AssetActionButtons = (props) => {
  return (
    <Fragment>
      <Flexbox justifyContent="flex-end">
        <Button text="back"></Button>
        <Button text="Clear"></Button>
        <Button text="Save" type="submit"></Button>
      </Flexbox>
    </Fragment>
  );
};

AssetActionButtons.propTypes = {};

export default AssetActionButtons;
