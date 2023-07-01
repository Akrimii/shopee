import { Typography } from "@mui/material";
import { EmptyShoppingCartBox } from "./TooltipStyle";

function ShoppingCartEmpty() {
  return (
    <EmptyShoppingCartBox>
      <img
        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
        style={{ width: "100px" }}
      />
      <Typography
        sx={{ fontSize: "0.8rem", color: "#757575", fontWeight: "bolder" }}
      >
        Your shopping cart is empty
      </Typography>
    </EmptyShoppingCartBox>
  );
}

export default ShoppingCartEmpty;
