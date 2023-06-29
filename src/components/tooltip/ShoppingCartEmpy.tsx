import { Box, Typography } from "@mui/material";

function ShoppingCartEmpty() {
  return (
    <Box
      sx={{
        width: "290px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
        style={{ width: "100px" }}
      />
      <Typography
        sx={{ fontSize: "0.8rem", color: "#757575", fontWeight: "bolder" }}
      >
        Your shopping cart is empty
      </Typography>
    </Box>
  );
}

export default ShoppingCartEmpty;
