import React from "react";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";
import productsservice from "../services/Productservice";
import Auth from "../components/Auth";
const NewProduct = (props) => {
  const [name, setname] = React.useState([""]);
  const [price, setprice] = React.useState([0]);
  return (
    <Auth>
      <Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <h2>Add new products</h2>
            <TextField
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <TextField
              label="Price"
              variant="standard"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          onClick={(e) => {
            console.log("Send API Call");
            productsservice.addproduct({ name, price }).then((data, _id) => {
              props.history.push("/products");
            });
          }}
        >
          Add
        </Button>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
