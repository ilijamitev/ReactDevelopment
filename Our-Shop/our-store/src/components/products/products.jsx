import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { createdContext } from "../../store-context/context-store";
import { Container } from "../shared";
import { MediaCard } from "./card/Card";

export const Products = () => {
  const { products } = useContext(createdContext);
  console.log(products);
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
      <Divider />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          gap: 2,
        }}
      >
        {products.map((product) => {
          return (
            <MediaCard
              key={product.id}
              title={product.title}
              image={product.image}
            />
          );
        })}
      </Box>
    </Container>
  );
};
