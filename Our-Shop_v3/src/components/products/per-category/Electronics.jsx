import React, { useContext } from "react";
import { createdContext } from "../../../store-context/context-store";
import { Box } from "@mui/material";
import { MediaCard } from "../card/Card";

export const Electronics = () => {
  const category = "electronics";

  const { selectProductsByCategory } = useContext(createdContext);

  // const filteredByCategory = selectProductsByCategory(category)

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "2rem",
        gap: 2,
      }}
    >
      {selectProductsByCategory(category).map((product) => {
        return (
          <MediaCard
            product={product}
            key={product.id}
            title={product.title}
            image={product.image}
            id={product.id}
          />
        );
      })}
    </Box>
  );
};
