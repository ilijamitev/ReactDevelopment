import { Box } from "@mui/material";
import React from "react";
import "./main.css";

export const Main = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <Box sx={{ maxWidth: "1280px", minWidth: "1100px" }}>{children}</Box>
    </div>
  );
};
