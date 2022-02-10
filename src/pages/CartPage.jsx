import { Container } from "@mui/material";
import React from "react";
import CartTable from "../components/CartTable";
import FavoriteTable from "../components/FavoriteTable";

const CartPage = () => {
  return (
    <div className="cart-page" style={{ marginTop: "100px" }}>
      <Container>
        <h1 style={{ textAlign: "center", color: "gray" }}>
          Страница товаров и избранного
        </h1>
        <CartTable />
        <FavoriteTable />
      </Container>
    </div>
  );
};

export default CartPage;
