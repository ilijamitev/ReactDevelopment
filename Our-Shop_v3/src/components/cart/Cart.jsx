import { Box, Button, Snackbar, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createdContext } from "../../store-context/context-store";
import { Container } from "../shared";
import { CartItem } from "./cart-item/CartItem";
import emailjs from "@emailjs/browser";

/**
 *
 * serviceId : service_iv5c9ze,
 * templateId: template_hywqkoi,
 * public_key: user_d02vCWkBqw2wMRxfQbFtq
 */
export const Cart = () => {
  const context = useContext(createdContext);
  const navigate = useNavigate();
  const { cart, handleRemoveFromCart, clearCart } = context;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [userInfo, setUserInfo] = useState({
    userName: "",
    userNumber: "",
    userAddress: "",
  });

  const handleUserName = (event) => {
    const value = event.target.value;

    setUserInfo({
      ...userInfo,
      userName: value,
    });
  };

  const handleUserNumber = (event) => {
    const value = event.target.value;

    setUserInfo({
      ...userInfo,
      userNumber: value,
    });
  };

  const handleUserAdress = (event) => {
    setUserInfo({
      ...userInfo,
      userAddress: event.target.value,
    });
  };

  const placeOrder = async () => {
    const emailBody = {
      from_name: userInfo.userName,
      from_number: userInfo.userNumber,
      from_address: userInfo.userAddress,
      cart_items: cart.map((product) => product.title).join(),
    };

    await emailjs.send(
      "service_iv5c9ze",
      "template_hywqkoi",
      emailBody,
      "user_d02vCWkBqw2wMRxfQbFtq"
    );
    handleClick();
    setUserInfo({
      userName: "",
      userNumber: "",
      userAddress: "",
    });
    clearCart();
  };

  return (
    <Container>
      <Box>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Your order is sent"
          // action={action}\
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {cart.length > 0 &&
            cart.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}

          {cart.length > 0 && (
            <Box
              sx={{
                marginTop: "4rem",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button onClick={() => navigate("/products")} variant="outlined">
                Continue Shopping
              </Button>
              <Button onClick={placeOrder} variant="outlined">
                Place Order
              </Button>
            </Box>
          )}
        </Box>

        <TextField
          onChange={handleUserName}
          value={userInfo.userName || ""}
          id="outlined-basic"
          label="You name"
          variant="outlined"
        />
        <TextField
          onChange={handleUserNumber}
          value={userInfo.userNumber || ""}
          id="outlined-basic"
          label="You number"
          variant="outlined"
        />
        <TextField
          onChange={handleUserAdress}
          value={userInfo.userAddress || ""}
          id="outlined-basic"
          label="You address"
          variant="outlined"
        />
      </Box>
    </Container>
  );
};
