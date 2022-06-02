import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import userservice from "../services/Userservice";
const Admin = (props) => {
  React.useEffect(() => {
    if (!userservice.isAdmin()) {
      props.history.push("/log-in");
    }
  }, []);
  return <>{props.chidren}</>;
};

export default withRouter(Admin);
