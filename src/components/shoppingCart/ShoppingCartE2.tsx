import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { CartItem } from "../../App";
import {
  EachButton,
  FreeContainer,
  LightOrangeContainer,
  ProductCardGrid,
  StyledDataGrid,
} from "./ShoppingCartStyle";
import { Product } from "../../hooks/useProducts";
import ShoppingCartE4 from "./ShoppingCartE4";
import ShoppingCartE3 from "./ShoppingCartE3";
import useExchange from "../../hooks/useExchange";
import ProductPageE4 from "../productPage/ProductPageE4";
import DailyDiscoverE2 from "../dailyDiscover/DailyDiscoverE2";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface row {
  id: number;
  product: { name: string; photo: string; product: Product };
  price: { original: string; discounted: string };
  quantity: number;
  totalPrice: number;
  totalSaved: number;
  actions: { item: CartItem };
}
interface Props {
  carts: CartItem[];
  onMinusQuantity: () => void;
  onAddQuantity: () => void;
  isLogin: boolean;
  products: Product[];
  onSeeAll: () => void;
  onDeleteCartItem: (product: Product) => void;
  onMinusShoppingCartItem: (item: CartItem) => void;
  onAddShoppingCartItem: (item: CartItem) => void;
  onSubmitToCheckout: (item: (row | undefined)[]) => void;
}
function ShoppingCartE2({
  carts,
  products,
  isLogin,
  onSeeAll,
  onDeleteCartItem,
  onMinusShoppingCartItem,
  onAddShoppingCartItem,
  onSubmitToCheckout,
}: Props) {
  const { exchange } = useExchange();
  const [purchaseItems, setPurchaseItems] = useState<(row | undefined)[]>([]);
  const onRowsSelectionHandler = (ids: GridRowSelectionModel) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    setPurchaseItems([...selectedRowsData]);
    onSubmitToCheckout([...selectedRowsData]);
  };
  function original(price: number) {
    return (price * exchange.MYR).toFixed(2);
  }
  function discounted(price: number, discountPercentage: number) {
    return (price * exchange.MYR * (1 - discountPercentage / 100)).toFixed(2);
  }
  function total(numOfItem: number, price: number, discountPercentage: number) {
    return (
      price *
      exchange.MYR *
      (1 - discountPercentage / 100) *
      numOfItem
    ).toFixed(2);
  }
  function saving(
    numOfItem: number,
    price: number,
    discountPercentage: number
  ) {
    return (
      price *
      exchange.MYR *
      (discountPercentage / 100) *
      numOfItem
    ).toFixed(2);
  }
  if (carts.length === 0) {
    return (
      <>
        <ShoppingCartE4 />
        <ProductPageE4 onSeeAll={onSeeAll} />
        <ProductCardGrid sx={{ backgroundColor: "white" }}>
          <DailyDiscoverE2 products={products} isLogin={isLogin} />
        </ProductCardGrid>
      </>
    );
  }
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 0,
    },
    {
      field: "product",
      headerName: "Product",
      width: 450,
      sortable: false,
      renderCell: (params) => (
        <Link
          to="/product/id"
          state={params.row.product.product}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box sx={{ height: "100%", margin: "15px 15px 15px 0" }}>
              <img
                src={params.row.product.photo}
                style={{
                  objectFit: "contain",
                  width: "100px",
                  height: "100px",
                  overflow: "hidden",
                }}
              />
            </Box>
            <Typography sx={{ fontSize: "0.9rem" }}>
              {params.row.product.name}
            </Typography>
          </Stack>
        </Link>
      ),
    },
    {
      field: "price",
      headerName: "Unit Price",
      width: 220,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => (
        <Container
          disableGutters
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              textDecoration: "line-through",
              color: "gray",
              fontSize: "0.9rem",
              alignText: "right",
              width: "80px",
            }}
          >
            {params.row.price.original}
          </Typography>
          <Typography
            sx={{ fontSize: "0.9rem", alignText: "left", width: "80px" }}
          >
            {params.row.price.discounted}
          </Typography>
        </Container>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 180,
      headerAlign: "center",
      sortable: false,
      type: "actions",
      renderCell: (params) => (
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <EachButton
            disableRipple
            onClick={() => onMinusShoppingCartItem(params.row.actions.item)}
          >
            -
          </EachButton>
          <EachButton disabled>{params.row.quantity}</EachButton>
          <EachButton
            disableRipple
            onClick={() => onAddShoppingCartItem(params.row.actions.item)}
          >
            +
          </EachButton>
        </ButtonGroup>
      ),
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      width: 120,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => (
        <Typography
          sx={{
            color: "#EE4D2D",
            fontSize: "0.9rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          RM{params.row.totalPrice.toFixed(2)}
        </Typography>
      ),
    },
    {
      field: "totalSaved",
      headerName: "Total Saved",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      headerAlign: "center",
      sortable: false,
      type: "actions",
      renderCell: (params) => (
        <Button
          disableRipple
          onClick={() => onDeleteCartItem(params.row.product.product)}
          variant="text"
          sx={{
            textTransform: "capitalize",
            color: "inherit",
            width: "100%",
            ":hover": {
              backgroundColor: "transparent",
              color: "#ee4d2d",
            },
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  const rows: row[] = [];
  {
    carts.map((cart: CartItem, index) => {
      rows.push({
        id: index,
        product: {
          name: `${cart.p.brand.toUpperCase()}- ${cart.p.title}`,
          photo: cart.p.thumbnail,
          product: cart.p,
        },
        price: {
          original: `RM${original(cart.p.price)}`,
          discounted: `RM${discounted(
            cart.p.price,
            cart.p.discountPercentage
          )}`,
        },
        quantity: cart.numOfItem,
        totalSaved: parseFloat(
          saving(cart.numOfItem, cart.p.price, cart.p.discountPercentage)
        ),
        totalPrice: parseFloat(
          total(cart.numOfItem, cart.p.price, cart.p.discountPercentage)
        ),
        actions: { item: cart },
      });
    });
  }
  return (
    <>
      <LightOrangeContainer>
        <LocalShippingIcon style={{ color: "#00BFA5", fontSize: "2.1rem" }} />
        <FreeContainer>
          <Typography sx={{ fontSize: "0.6rem", color: "white" }}>
            Free
          </Typography>
        </FreeContainer>
        <Typography sx={{ fontSize: "0.8rem" }}>
          Select free shipping voucher below to enjoy shipping discount
        </Typography>
      </LightOrangeContainer>
      <Container
        disableGutters
        sx={{
          minWidth: "1200px",
          margin: "50px auto 0 auto",
          height: "auto",
        }}
      >
        <StyledDataGrid
          disableColumnMenu={true}
          rows={rows}
          columns={columns}
          checkboxSelection
          columnVisibilityModel={{
            id: false,
            totalSaved: false,
          }}
          getRowHeight={() => "auto"}
          disableRowSelectionOnClick
          onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
        <ShoppingCartE3 purchaseItems={purchaseItems} />
      </Container>
      <ProductPageE4 onSeeAll={onSeeAll} />
      <ProductCardGrid sx={{ backgroundColor: "white" }}>
        <DailyDiscoverE2 products={products} isLogin={isLogin} />
      </ProductCardGrid>
    </>
  );
}
export default ShoppingCartE2;
