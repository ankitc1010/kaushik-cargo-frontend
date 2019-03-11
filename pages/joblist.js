import React from "react";
import JobList from "../components/JobList";
import User from "../components/common/User";

const JobListPage = () => (
  <User>
    {({ data, loading, error }) => {
      if (loading) {
        return <div>Loading</div>;
      }
      if (data) {
        return <JobList />;
      }
      return <div>Not Authorised</div>;
    }}
  </User>
);

export default JobListPage;
