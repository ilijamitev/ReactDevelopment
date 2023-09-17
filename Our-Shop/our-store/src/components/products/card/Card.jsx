import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const MediaCard = (props) => {
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
        <Button size="small">View Item</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
