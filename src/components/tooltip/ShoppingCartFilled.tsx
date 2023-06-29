import { Container, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ViewMyCartButton } from "./TooltipStyle";
import { CartItem } from "../../App";
import useExchange from "../../hooks/useExchange";

interface Props {
  carts: CartItem[];
}
function ShoppingCartFilled({ carts }: Props) {
  const { exchange } = useExchange();

  function discounted(price: number, discountPercentage: number) {
    return (price * exchange.MYR * (1 - discountPercentage / 100)).toFixed(2);
  }

  return (
    <Container
      disableGutters
      sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
    >
      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "#757575",
          padding: "10px 10px 0 10px",
        }}
      >
        Recently Added Products
      </Typography>
      {carts.slice(0, 5).map((cart, index) => (
        <Link
          to="/product/id"
          style={{ textDecoration: "none", color: "inherit" }}
          key={index}
          state={cart.p}
        >
          <Container
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "290px",
              alignItems: "center",
              padding: "5px",
              justifyContent: "space-between",
              ":hover": {
                backgroundColor: "#F2F2F2",
              },
            }}
          >
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  backgroundColor: "#F2F2F2",
                  marginRight: "5px",
                  height: "min-content",
                  width: "min-content",
                }}
              >
                <img
                  src={cart.p.thumbnail}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </Box>
              <Typography sx={{ fontSize: "0.8rem" }}>
                {cart.p.title}
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: "0.8rem", color: "#EE4D2D" }}>
              RM{discounted(cart.p.price, cart.p.discountPercentage)}
            </Typography>
          </Container>
        </Link>
      ))}
      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", color: "#757575" }}>
          {carts.length > 5 && `${carts.length - 5} more product in cart`}
        </Typography>
        <Link to="/shoppingcart">
          <ViewMyCartButton disableRipple>View My Cart</ViewMyCartButton>
        </Link>
      </Container>
    </Container>
  );
}

export default ShoppingCartFilled;
