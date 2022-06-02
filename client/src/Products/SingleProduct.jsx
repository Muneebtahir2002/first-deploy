import { Button, Grid } from "@mui/material";
import React from "react";
import productsservice from "../services/Productservice";
import { withRouter } from "react-router";
import userservice from "../services/Userservice";

const SingleProduct = (props) => {
  const { product, onDelete } = props;
  return (
    <Grid item xs={3}>
      <h2>Product</h2>
      <h2>
        {" "}
        {product.name}{" "}
        {userservice.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                props.history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={(e) => {
                productsservice
                  .deleteProducts(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </h2>
      <p> {product.price}</p>
      <hr></hr>
    </Grid>
  );
};

export default withRouter(SingleProduct);
