import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import userservice from "../services/Userservice";
const Auth = (props) => {
  React.useEffect(() => {
    if (!userservice.isloggedin()) {
      props.history.push("/log-in");
    }
  }, []);
  return <>{props.chidren}</>;
};

export default withRouter(Auth);
