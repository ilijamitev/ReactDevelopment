import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link, NavLink } from "react-router-dom";

const routes = [
  { to: "/", name: "Home" },
  { to: "/features", name: "Features" },
  { to: "/products", name: "Products" },
  { to: "/contact", name: "Contact" },
  { to: "/login", name: "Login" },
];

// DRY = do not repeat yourself
export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {/* <Button
            sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
            color="inherit"
          >
            <Link to="/">Home</Link>
          </Button>

          <Button
            sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
            color="inherit"
          >
            <Link to="/features">Features</Link>
          </Button>

          <Button
            sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
            color="inherit"
          >
            <Link to="/products">Products</Link>
          </Button>

          <Button
            sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
            color="inherit"
          >
            <Link to="/contact">Contact</Link>
          </Button>

          <Button
            sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
            color="inherit"
          >
            <Link to="/login">Login</Link>
          </Button> */}

          {/* Automated approach of above code  */}
          {routes.map((route) => {
            return (
              <Button
                key={route.to}
                sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
                color="inherit"
              >
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#B8EBD0" : "inherit",
                  })}
                  to={route.to}
                  end
                >
                  {route.name}
                </NavLink>
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
