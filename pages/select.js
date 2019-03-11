import React from "react";
import Select from "../components/Select";
import User from "../components/common/User";

const SelectPage = () => (
  <User>
    {({ data, loading, error }) => {
      if (loading) {
        return <div>Loading</div>;
      }
      if (data) {
        return <Select />;
      }
      return <div>Not Authorised</div>;
    }}
  </User>
);

export default SelectPage;
