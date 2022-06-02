import { Button, TextField } from "@mui/material";
import React from "react";
import userservice from "../services/Userservice";
import { toast } from "react-toastify";
const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div>
      <h1>Register Here</h1>
      <TextField
        label="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br />
      <hr />
      <TextField
        label="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <hr />
      <TextField
        label="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          userservice
            .register(email, password, name)
            .then((data) => {
              console.log(data);
              props.history.push("/log-in");
            })
            .catch((err) => {
              console.log(err);
              toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT,
              });
            });
        }}
      >
        {" "}
        Register
      </Button>
    </div>
  );
};

export default Register;
