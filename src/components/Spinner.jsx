import React from "react";
import { BounceLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <BounceLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={50}
    />
  );
};

export default Spinner;
