import { Box, Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createdContext } from "../../store-context/context-store";
import { Container } from "../shared";
import { MediaCard } from "./card/Card";

const categories = [
  "women's clothing",
  "men's clothing",
  "electronics",
  "jewelery",
];

/**
 * pri sekoja iteracija na categories,
 * category ni e sekoj string,
 *
 *
 */

// categoryRoutes["women's clothing"]  the value is "woman-clothing"

const categoryRoutes = {
  "women's clothing": "woman-clothing",
  "men's clothing": "man-clothing",
  electronics: "electronics",
  jewelery: "jewelery",
};

export const Products = () => {
  const { products } = useContext(createdContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // /products/mans-clothing with split => ['', 'products', "mans-clothing"]
  // /products with split => ['', 'products']

  // this is true if we are at => /products
  const areWeOnRootProductPath = location.pathname.split("/").length === 2;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "#FFD6AF",
            padding: "1rem",
            color: "white",
            borderRadius: "5px",
          }}
        >
          CHECK OUT OUR BRAND NEW PRODUCTS
        </Typography>
      </Box>

      <Divider sx={{ marginTop: "2rem" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
          }}
          variant="text"
          aria-label="text button group"
        >
          {categories.map((category) => {
            return (
              <Button
                onClick={() => navigate(categoryRoutes[category])}
                key={category}
              >
                {category}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          gap: 2,
        }}
      >
        {areWeOnRootProductPath &&
          products.map((product) => {
            return (
              <MediaCard
                key={product.id}
                title={product.title}
                image={product.image}
                id={product.id}
              />
            );
          })}
      </Box>
      <Outlet />
    </Container>
  );
};
