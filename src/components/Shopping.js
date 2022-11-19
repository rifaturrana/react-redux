import React from "react";
import { useSelector } from "react-redux";
import Auth from "./Auth";
import Layout from "./Layout";

const Shopping = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
};

export default Shopping;
