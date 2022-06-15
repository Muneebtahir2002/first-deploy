import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import { Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import productsservice from "../services/Productservice";
import userservice from "../services/Userservice";
import Pagination from "@mui/material/Pagination";

const Handleproducts = (props) => {
  const [product, setProduct] = React.useState([]);
  const [total, setTotal] = React.useState([0]);
  const [perPage, setperPage] = React.useState([10]);
  const page = props.match.params.page ? props.match.params.page : 1;
  const GetData = () => {
    productsservice
      .getProducts(page, perPage)
      .then((data) => {
        console.log(data);

        setProduct(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(GetData, [page, perPage]);
  const Handlebuttonclick = () => {
    props.history.push("/products/newproducts");
  };
  return (
    <div>
      <select
        style={{ width: "100px", height: "30px" }}
        value={perPage}
        onChange={(e) => setperPage(e.target.value)}
        multiple={true}
      >
        <option value="2">two</option>
        <option value="10">ten</option>
      </select>
      {userservice.isloggedin() && (
        <Fab color="primary" aria-label="add" onClick={Handlebuttonclick}>
          <AddIcon />
        </Fab>
      )}
      {product.length == 0 ? (
        <p>there are no products available</p>
      ) : (
        <Grid container spacing={3}>
          {product.map((product, index) => {
            return (
              <SingleProduct key={index} product={product} onDelete={GetData} />
            );
          })}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            props.history.push("/products/" + value);
          }}
        />{" "}
        Total: {total}{" "}
      </Grid>
    </div>
  );
};

export default Handleproducts;
