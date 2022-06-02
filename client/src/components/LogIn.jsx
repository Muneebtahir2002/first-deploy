import { Button, TextField } from "@mui/material";
import React from "react";
import Userservice from "../services/Userservice";

const LogIn = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  return (
    <div>
      <h1>Log in Here</h1>
      <TextField
        label="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br />
      <hr />
      <TextField
        label="password"
        type="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />{" "}
      <br />
      <hr />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          Userservice.login(email, password)
            .then((data) => {
              console.log(data);
              window.location.href = "/";
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        LogIn
      </Button>
    </div>
  );
};

export default LogIn;
