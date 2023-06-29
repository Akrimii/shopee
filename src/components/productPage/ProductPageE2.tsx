import {
  Breadcrumbs,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { GrayBox, StyledChip } from "./ProductPageStyle";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Product } from "../../hooks/useProducts";
import { RiShieldCheckFill } from "react-icons/ri";
import useExchange from "../../hooks/useExchange";

interface Props {
  product: Product;
  totalRatings: number;
}
function ProductPageE2({ product, totalRatings }: Props) {
  const { exchange } = useExchange();

  function original(price: number) {
    return (price * exchange.MYR).toFixed(2);
  }

  function discounted(price: number, discountPercentage: number) {
    return (price * exchange.MYR * (1 - discountPercentage / 100)).toFixed(2);
  }
  return (
    <>
      <Typography variant="h6">
        {product.brand.toUpperCase()}- {product.title}
      </Typography>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator="|"
        sx={{ color: "black", fontSize: "1.2rem" }}
      >
        <Rating
          icon={<StarRoundedIcon />}
          emptyIcon={<StarRoundedIcon fontSize="inherit" />}
          readOnly
          value={product.rating}
          precision={0.5}
          sx={{
            ".MuiRating-iconFilled": {
              color: "#EE4D2D",
            },
            ".MuiRating-iconEmpty": {
              color: "#F2F2F2",
            },
          }}
        />
        <Typography sx={{ color: "#757575" }}>
          {totalRatings} Ratings
        </Typography>
        <Typography sx={{ color: "#757575" }}>{product.stock} sold</Typography>
      </Breadcrumbs>

      <GrayBox>
        <Stack direction="column">
          <Container
            disableGutters
            sx={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <Typography sx={{ textDecoration: "line-through", color: "gray" }}>
              RM{original(product.price)}
            </Typography>
            <Typography sx={{ color: "#ee4d2d", fontSize: "1.8rem" }}>
              RM
              {discounted(product.price, product.discountPercentage)}
            </Typography>
            <StyledChip label={`${product.discountPercentage}% OFF`} />
          </Container>
          <Stack direction="row">
            <RiShieldCheckFill size={30} style={{ color: "#EE4D2D" }} />
            <Stack direction="column">
              <Typography sx={{ fontSize: "0.85rem", color: "#EE4D2D" }}>
                100% Authentic Guarantee
              </Typography>
              <Typography sx={{ fontSize: "0.75rem" }}>
                Guarantee Authentic or Money Back
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </GrayBox>
    </>
  );
}

export default ProductPageE2;
