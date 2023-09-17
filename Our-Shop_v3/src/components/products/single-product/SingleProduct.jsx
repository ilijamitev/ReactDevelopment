import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createdContext } from "../../../store-context/context-store";
import { Container } from "../../shared";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { selectProductById } = useContext(createdContext);

  const singleProduct = selectProductById(params.id);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            style={{ height: "40%" }}
          />
        </Box>

        <Box sx={{ width: "50%" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {singleProduct.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "4rem" }}
          >
            {singleProduct.description}
          </Typography>

          <Box
            sx={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6">
              Price: {singleProduct.price} EUR
            </Typography>

            <Rating
              name="read-only"
              value={singleProduct.rating.rate}
              readOnly
            />

            <Tooltip title="Add to Cart">
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Button
            sx={{ marginTop: "3rem" }}
            onClick={() => navigate(location.state.prevPath)}
            variant="outlined"
          >
            GO BACK
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
