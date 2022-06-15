import React from "react";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";
import productsservice from "../services/Productservice";
import Admin from "../components/Admin";
const UpdateProducts = (props) => {
  const [name, setname] = React.useState([""]);
  const [price, setprice] = React.useState([0]);
  const id = props.match.params.id;

  React.useEffect(() => {
    productsservice.getSingleProduct(id).then((data) => {
      setname(data.name);
      setprice(data.price);
    });
  }, []);
  return (
    <Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h2>Update Product</h2>
          <TextField
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          {}
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
          productsservice
            .updateProducts(id, { name, price })
            .then((data) => {
              console.log(data);
              props.history.push("/products");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Update
      </Button>
    </Grid>
  );
};

export default UpdateProducts;
