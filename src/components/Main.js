import React from "react";
import "../App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const navigateCounter = () => {
    navigate("/counter");
  };
  const navigateShopping = () => {
    navigate("/shopping");
  };
  return (
    <div className="buttons">
      <button onClick={navigateCounter} className="button-28">
        Counter APP
      </button>
      <button onClick={navigateShopping} className="button-28">
        Shopping Cart
      </button>
    </div>
  );
};
