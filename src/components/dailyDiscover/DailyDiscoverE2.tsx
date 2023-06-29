import {
  DiscountRibbonTextContainer,
  DiscountedPrice,
  OriginalPrice,
  PriceContainer,
  ProductCard,
  ProductCardContent,
  YellowRibbon,
} from "./DailyDiscoverStyle";
import { Product } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { CardMedia, Rating, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useExchange from "../../hooks/useExchange";

interface Props {
  products: Product[];
  isLogin: boolean;
}

function DailyDiscoverE2({ products, isLogin }: Props) {
  const { exchange } = useExchange();

  function original(price: number) {
    return (price * exchange.MYR).toFixed(2);
  }

  function discounted(price: number, discountPercentage: number) {
    return (price * exchange.MYR * (1 - discountPercentage / 100)).toFixed(2);
  }
  return (
    <>
      {products.map((product) => (
        <Link
          state={product}
          to={isLogin ? "/product/id" : "/login"}
          key={product.id}
          style={{ textDecoration: "none", flexBasis: "16.67%" }}
        >
          <ProductCard>
            <YellowRibbon />
            <DiscountRibbonTextContainer>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#ee4d2d",
                }}
              >
                {product.discountPercentage.toFixed(0)}%
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "white",
                }}
              >
                OFF
              </Typography>
            </DiscountRibbonTextContainer>
            <CardMedia
              component="img"
              image={product.thumbnail}
              sx={{ height: 190, objectFit: "contain" }}
            />
            <ProductCardContent>
              <Typography variant="subtitle2">
                {product.brand.toUpperCase()}- {product.title}
              </Typography>
              <PriceContainer>
                <OriginalPrice>RM{original(product.price)}</OriginalPrice>
                <DiscountedPrice>
                  <Typography sx={{ fontSize: "0.8rem" }}>RM</Typography>
                  {discounted(product.price, product.discountPercentage)}
                </DiscountedPrice>
              </PriceContainer>

              <Stack direction="row" spacing="2px">
                <Rating
                  readOnly
                  emptyIcon={<StarIcon fontSize="inherit" />}
                  value={product.rating}
                  precision={0.5}
                  sx={{ fontSize: "12px" }}
                />
                <Typography sx={{ fontSize: "12px" }}>
                  {product.stock} sold
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: "11px", color: "#757575" }}>
                Kuala Lumpur
              </Typography>
            </ProductCardContent>
          </ProductCard>
        </Link>
      ))}
    </>
  );
}

export default DailyDiscoverE2;
