import { Box } from "@mui/material";
import React, { useContext } from "react";
import { createdContext } from "../../../store-context/context-store";
import { MediaCard } from "../card/Card";

export const WomanClothing = () => {
  const category = "women's clothing";

  const { selectProductsByCategory } = useContext(createdContext);
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
