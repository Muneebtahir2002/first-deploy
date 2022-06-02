import React from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import userservice from "../services/Userservice";
const TopMenu = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <Link to="/" style={{ color: "white", padding: "5px" }}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/products" style={{ color: "white", padding: "5px" }}>
              Products
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/contact-us" style={{ color: "white", padding: "5px" }}>
              Contact Us
            </Link>
          </Typography>
          {!userservice.isloggedin() ? (
            <>
              <Typography variant="h6" color="inherit">
                <Link to="/log-in" style={{ color: "white", padding: "5px" }}>
                  Log In
                </Link>
              </Typography>
              <Typography variant="h6" color="inherit">
                <Link to="/register" style={{ color: "white", padding: "5px" }}>
                  Register
                </Link>
              </Typography>
            </>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                userservice.logout();
                window.location.href = "/";
              }}
            >
              Log Out {userservice.getLoggedInUser().name}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
