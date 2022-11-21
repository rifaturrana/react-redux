import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Auth";
import Layout from "./Layout";
import Notification from "./Notification";
import { uiActions } from "../store/ui-slice";
import { cartActions } from "../store/cart-slice";
import { fetchData } from "../store/cart-actions";
let isFirstRender = true;
const Shopping = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // useEffect(() => {
  //   return async (dispatch) => {
  //     const fetchHandler = async () => {
  //       const res = await fetch(
  //         "https://react-redux-4e09e-default-rtdb.firebaseio.com/cartItems.json"
  //       );
  //       const data = await res.json();
  //       return data;
  //     };
  //     try {
  //       const cartData = await fetchHandler();
  //       dispatch(cartActions.replaceData(cartData));
  //     } catch (err) {
  //       dispatch(
  //         uiActions.showNotification({
  //           open: true,
  //           message: "Fetching data failed",
  //           type: "error",
  //         })
  //       );
  //     }
  //   };
  // }, []);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      //Send state as Sending request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request...",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://react-redux-4e09e-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
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
