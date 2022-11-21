import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Auth from "./Auth";
import Layout from "./Layout";
import { Snackbar } from "@mui/material";

const Shopping = () => {
  const cart = useSelector((state) => state.cart);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://react-redux-4e09e-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    sendRequest();
  }, [cart]);
  return (
    <div>
      <Snackbar type="success" message={"This is a dummy message"} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
};

export default Shopping;
