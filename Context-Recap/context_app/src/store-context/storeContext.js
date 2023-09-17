import React from "react";

const ourDefaultValue = {
  recipe: {},
  firstName: "",
};

export const OurContext = React.createContext(ourDefaultValue);
