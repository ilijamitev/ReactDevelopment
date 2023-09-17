import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#B8EBD0" : "white",
            })}
            to={"/cart"}
          >
            <IconButton sx={{ color: "inherit" }}>
              <ShoppingCartIcon />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
