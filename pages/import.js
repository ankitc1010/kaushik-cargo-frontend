import React from "react";
import Import from "../components/Import";
import User from "../components/common/User";

const ImportPage = () => (
  <User>
    {({ data, loading, error }) => {
      if (loading) {
        return <div>Loading</div>;
      }
      if (data) {
        return <Import />;
      }
      return <div>Not Authorised</div>;
    }}
  </User>
);

export default ImportPage;
