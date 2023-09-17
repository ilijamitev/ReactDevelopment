import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const [secondsLeft, setSecondsLeft] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Hello from not found component");

    if (secondsLeft <= 0) {
      navigate("/");
    }

    const countdown = setInterval(() => {
      console.log("seconds left", secondsLeft);
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [secondsLeft, navigate]);

  return (
    <>
      <h1 style={{ color: "red", fontSize: "2rem" }}>Page not found!</h1>
      <h3>You will be redirected in {secondsLeft} seconds</h3>
    </>
  );
};
