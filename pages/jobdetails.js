import React from "react";
import JobDetails from "../components/JobDetails";
import User from "../components/common/User";

const JobDetailsPage = () => (
  <User>
    {({ data, loading, error }) => {
      if (loading) {
        return <div>Loading</div>;
      }
      if (data) {
        return <JobDetails />;
      }
      return <div>Not Authorised</div>;
    }}
  </User>
);

export default JobDetailsPage;
