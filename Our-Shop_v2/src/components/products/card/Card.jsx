import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PreviewIcon from "@mui/icons-material/Preview";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export const MediaCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        ":hover": {
          boxShadow: "5px 5px #CEEC97",
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.title}
        sx={{ objectFit: "contain", maxWidth: "300px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="View Item">
          <IconButton
            onClick={() => navigate(`/product/${props.id}`)}
            color="primary"
            aria-label="view item"
          >
            <PreviewIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add to Cart">
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
