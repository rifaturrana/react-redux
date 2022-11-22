import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Auth";
import Layout from "./Layout";
import Notification from "./Notification";
import { uiActions } from "../store/ui-slice";
import { fetchData } from "../store/cart-actions";
let isFirstRender = true;
const Shopping = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      const sendRequest = async () => {
        //Send state as Sending request
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sending request...",
            type: "warning",
          })
        );
        const res = await fetch("Firebase project URL", {
          method: "PUT",
          body: JSON.stringify(cart),
        });
        const data = await res.json();
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sent Request to DB Successfully",
            type: "success",
          })
        );

        // Send state as Request is successful
      };
      sendRequest().catch((err) => {
        //send state as error
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sending request failed",
            type: "error",
          })
        );
      });
    }
  }, [cart]);
  return (
    <div>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
};

export default Shopping;
