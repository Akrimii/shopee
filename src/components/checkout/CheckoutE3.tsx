import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Input,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { row } from "../shoppingCart/ShoppingCartE2";
import { OKButton, PlaceOrderButton, StyledDataGrid } from "./CheckoutStyle";
import getDate from "../../utilities/getDate";
import CheckoutE4 from "./CheckoutE4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  checkoutItems: (row | undefined)[];
  onPlaceOrder: (checkoutItems: (row | undefined)[]) => void;
}

export interface CheckoutRow {
  id: number;
  product: { name: string; photo: string };
  price: string;
  amount: number;
  itemSubtotal: number;
}

function CheckoutE3({ checkoutItems, onPlaceOrder }: Props) {
  const navigate = useNavigate();
  const { soonest, latest } = getDate();
  const [orderPlacedDialog, setOrderPlacedDialog] = useState(false);

  function myFunction() {
    onPlaceOrder(checkoutItems);
    setOrderPlacedDialog(true);
  }
  function onOK() {
    setOrderPlacedDialog(false);
    navigate("/");
  }

  function calculateItemsTotal(array: (CheckoutRow | undefined)[]) {
    let total = 3;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        total += (array[i] as CheckoutRow).itemSubtotal;
      }
    }
    return total;
  }

  function calculateAmountTotal(array: (CheckoutRow | undefined)[]) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        total += (array[i] as CheckoutRow).amount;
      }
    }
    return total;
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
      width: 500,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Box sx={{ height: "100%", margin: "15px 15px 15px 0" }}>
            <img
              src={params.row.product.photo}
              style={{
                objectFit: "contain",
                width: "40px",
                height: "40px",
                overflow: "hidden",
              }}
            />
          </Box>

          <Typography sx={{ fontSize: "0.8rem" }}>
            {params.row.product.name}
          </Typography>
        </Stack>
      ),
    },
    {
      field: "price",
      headerName: "Unit Price",
      width: 200,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => (
        <Typography
          sx={{ fontSize: "0.8rem", width: "100%", textAlign: "center" }}
        >
          {params.row.price}
        </Typography>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 200,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => (
        <Typography
          sx={{ fontSize: "0.8rem", width: "100%", textAlign: "center" }}
        >
          {params.row.amount}
        </Typography>
      ),
    },
    {
      field: "itemSubtotal",
      headerName: "Item Subtotal",
      width: 200,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => (
        <Typography
          sx={{ fontSize: "0.8rem", width: "100%", textAlign: "center" }}
        >
          RM{params.row.itemSubtotal}
        </Typography>
      ),
    },
  ];

  const checkoutRows: CheckoutRow[] = [];
  {
    checkoutItems.map((checkoutItem: row | undefined) => {
      checkoutRows.push({
        id: (checkoutItem as row).id,
        product: {
          name: (checkoutItem as row).product.name,
          photo: (checkoutItem as row).product.photo,
        },
        price: (checkoutItem as row).price.discounted,
        amount: (checkoutItem as row).quantity,
        itemSubtotal: (checkoutItem as row).totalPrice,
      });
    });
  }

  return (
    <>
      <Container
        disableGutters
        sx={{
          minWidth: "1200px",
          margin: "20px auto 0 auto",
          height: "auto",
        }}
      >
        <StyledDataGrid
          disableColumnMenu={true}
          rows={checkoutRows}
          columns={columns}
          columnVisibilityModel={{
            id: false,
            totalSaved: false,
          }}
          getRowHeight={() => "auto"}
          disableRowSelectionOnClick
        />
        <Container
          disableGutters
          sx={{
            height: "150px",
            backgroundColor: "#FAFDFF",
            borderTop: "2px solid rgba(0,0,0,0.1)",
            borderBottom: "2px solid rgba(0,0,0,0.1)",
          }}
        >
          <Stack direction="row" sx={{ height: "60%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px dashed rgba(0,0,0,0.1)",
                width: "50%",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem" }}>Message:</Typography>
              <Input
                sx={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "3px",
                  backgroundColor: "white",
                  fontSize: "0.8rem",
                  padding: "5px 20px",
                  width: "400px",
                }}
                disableUnderline
                name="message"
                placeholder="Please leave a message..."
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "50%",
                border: "1px dashed rgba(0,0,0,0.1)",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem", color: "#00BFA5" }}>
                Shipping Option:
              </Typography>
              <Stack direction="column">
                <Typography sx={{ fontSize: "0.8rem", fontWeight: "bolder" }}>
                  Standard Delivery
                </Typography>
                <Typography sx={{ color: "#757575", fontSize: "0.8rem" }}>
                  Receive by {soonest}-{latest}
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: "0.8rem" }}>RM 3.00</Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "40%",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography sx={{ color: "#757575" }}>
              Order Total ({calculateAmountTotal(checkoutRows)} item):
            </Typography>
            <Typography
              sx={{
                color: "#ee4d2d",
                fontSize: "1.2rem",
                paddingRight: "50px",
              }}
            >
              RM {calculateItemsTotal(checkoutRows).toFixed(2)}
            </Typography>
          </Box>
        </Container>
      </Container>
      <CheckoutE4 />

      <Container
        disableGutters
        sx={{
          backgroundColor: "#FFFEFB",
          minWidth: "1200px",
          margin: "0 auto",
          height: "250px",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <TableContainer
          sx={{
            width: "100%",
            borderBottom: "1px dashed rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "flex-end",
            height: "160px",
          }}
        >
          <Table
            sx={{
              marginRight: "50px",
              width: "300px",
              ".MuiTableCell-root": {
                border: "none",
                padding: "5px",
              },
            }}
          >
            <TableBody>
              <TableRow>
                <TableCell align="left">Merchandise Subtotal:</TableCell>
                <TableCell align="right">
                  RM {(calculateItemsTotal(checkoutRows) - 3).toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Shipping Total:</TableCell>
                <TableCell align="right">RM 3.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Payment:</TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ee4d2d", fontSize: "1.2rem" }}
                >
                  RM {calculateItemsTotal(checkoutRows).toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "90px",
          }}
        >
          <PlaceOrderButton
            onClick={myFunction}
            variant="contained"
            disableRipple
          >
            Place Order
          </PlaceOrderButton>
        </Box>
      </Container>

      <Dialog open={orderPlacedDialog} sx={{ backgroundColor: "#f2f2f2" }}>
        <Container
          sx={{
            width: "500px",
            height: "180px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#757575", fontSize: "0.8rem" }}>
            We have notified the seller to ship out your order.
          </Typography>
          <OKButton onClick={onOK} variant="contained">
            OK
          </OKButton>
        </Container>
      </Dialog>
    </>
  );
}

export default CheckoutE3;
