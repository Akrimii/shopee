import { Typography, Stack, ButtonGroup, Grid, Box } from "@mui/material";
import { Product } from "../../hooks/useProducts";
import { BsCartPlus } from "react-icons/bs";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import {
  AddToCartButton,
  BuyNowButton,
  EachButton,
  ProductCardGrid,
  WhiteContainer,
} from "./ProductPageStyle";
import ProductPageE1 from "./ProductPageE1";
import ProductPageE2 from "./ProductPageE2";
import DailyDiscoverE2 from "../dailyDiscover/DailyDiscoverE2";
import { where } from "underscore";
import ProductPageE3 from "./ProductPageE3";
import ProductPageE4 from "./ProductPageE4";
import ProductPageE5 from "./ProductPageE5";
import { useState } from "react";
import ProductPageE6 from "./ProductPageE6";

interface Props {
  product: Product;
  products: Product[];
  onMinusQuantity: () => void;
  onAddQuantity: () => void;
  quantity: number;
  onAddToCart: () => void;
  isLogin: boolean;
  onSeeAll: () => void;
  openDialog: boolean;
}

function ProductPage({
  product,
  products,
  onMinusQuantity,
  onAddQuantity,
  quantity,
  onAddToCart,
  isLogin,
  onSeeAll,
  openDialog,
}: Props) {
  const condition = product.category;
  const filteredProducts = where(products, { category: condition });
  const totalRatings = Math.floor(product.stock / 2);

  const [favourite, setFavourite] = useState<Product[]>([]);

  return (
    <>
      <WhiteContainer>
        <Grid container>
          <Grid item xs={5}>
            <ProductPageE1 product={product} />
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                favourite.includes(product)
                  ? setFavourite(favourite.filter((item) => item !== product))
                  : setFavourite([...favourite, product]);
              }}
            >
              {favourite.includes(product) ? (
                <TiHeartFullOutline
                  size="1.8rem"
                  style={{ color: "#ee4d2d" }}
                />
              ) : (
                <TiHeartOutline size="1.8rem" style={{ color: "#ee4d2d" }} />
              )}
              <Typography sx={{ fontSize: "1.2rem" }}>Favourite</Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <ProductPageE2 product={product} totalRatings={totalRatings} />
            <Stack
              direction="row"
              spacing="20px"
              sx={{ padding: "20px", alignItems: "center" }}
            >
              <Typography>Quantity</Typography>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined buttong group"
                sx={{
                  minWidth: "50px",
                }}
              >
                <EachButton disableRipple onClick={onMinusQuantity}>
                  -
                </EachButton>
                <EachButton disabled>{quantity}</EachButton>
                <EachButton disableRipple onClick={onAddQuantity}>
                  +
                </EachButton>
              </ButtonGroup>
              <Typography>{product.stock} pieces available</Typography>
            </Stack>

            <Stack direction="row" spacing="50px" sx={{ padding: "20px" }}>
              <AddToCartButton
                onClick={onAddToCart}
                variant="contained"
                startIcon={<BsCartPlus />}
                disableRipple
              >
                Add To Cart
              </AddToCartButton>
              <BuyNowButton variant="contained" disableRipple>
                Buy Now
              </BuyNowButton>
            </Stack>
          </Grid>
        </Grid>
      </WhiteContainer>

      <ProductPageE3 product={product} />

      <ProductPageE4 onSeeAll={onSeeAll} />

      <ProductCardGrid sx={{ backgroundColor: "white" }}>
        <DailyDiscoverE2 products={[...filteredProducts]} isLogin={isLogin} />
      </ProductCardGrid>

      <ProductPageE5 rating={product.rating} totalRatings={totalRatings} />

      <ProductPageE6 openDialog={openDialog} />
    </>
  );
}

export default ProductPage;
