import { Typography } from "@mui/material";
import { GoShoppingNowButton, NoResultsContainer } from "./ShoppingCartStyle";
import { useNavigate } from "react-router-dom";

function ShoppingCartE4() {
  const navigate = useNavigate();

  function GoShoppingNow() {
    navigate("/");
  }

  return (
    <>
      <NoResultsContainer>
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
          style={{ width: "100px" }}
        />
        <Typography
          sx={{ fontSize: "0.8rem", color: "#757575", fontWeight: "bolder" }}
        >
          Your shopping cart is empty
        </Typography>
        <GoShoppingNowButton
          disableRipple
          variant="contained"
          onClick={GoShoppingNow}
        >
          Go Shopping Now
        </GoShoppingNowButton>
      </NoResultsContainer>
    </>
  );
}

export default ShoppingCartE4;
