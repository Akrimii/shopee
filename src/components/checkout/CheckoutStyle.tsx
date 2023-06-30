import {
  AppBar,
  Box,
  Button,
  Container,
  Input,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const StyledAppBar = styled(AppBar)(() => ({
  position: "sticky",
  boxShadow: "none",
  height: "130px",
  width: "100%",
  minWidth: "1200px",
  borderBottom: "1px solid lightgray",
  background:
    "linear-gradient(to bottom, #EE4D2D 0%, #EE4D2D 30%, white 30%, white 100%)",
}));

export const StyledContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: "0 10px",
}));

export const StyledInput = styled(Input)(() => ({
  width: "100%",
  border: "1px solid #F2F2F2",
  padding: "5px",
  borderRadius: "3px",
  margin: "10px",
  fontSize: "0.9rem",
}));

export const AddNewAddressButton = styled(Button)(() => ({
  color: "#757575",
  textTransform: "none",
  border: "1px solid #757575",
  ":hover": {
    backgroundColor: "#F2F2F2",
    border: "1px solid #757575",
  },
}));

export const CancelButton = styled(Button)(() => ({
  width: "180px",
  textTransform: "none",
  color: "inherit",

  ":hover": {
    backgroundColor: "#F2F2F2",
  },
}));

export const SubmitButton = styled(Button)(() => ({
  width: "180px",
  textTransform: "none",
  backgroundColor: "#EE4D2D",
  ":hover": {
    backgroundColor: "#EE4D2D",
    opacity: "0.8",
  },
}));

export const ErrorMessage = styled(Typography)(() => ({
  fontSize: "0.8rem",
  color: "#ee4d2d",
  marginLeft: "20px",
}));

export const StyledDataGrid = styled(DataGrid)(() => ({
  padding: "0 30px",
  backgroundColor: "white",
  borderRadius: "5px",
  border: "none",
  "& .MuiDataGrid-row": {
    ":hover": { backgroundColor: "transparent" },
  },
  ".MuiDataGrid-columnHeader": {
    color: "#757575",
  },
  ".MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "transparent",
  },
  ".MuiDataGrid-row.Mui-selected": {
    backgroundColor: "transparent",
  },
  ".MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  ".MuiDataGrid-cell:focus": {
    outline: "none",
  },

  ".MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
  ".MuiButtonBase-root-MuiCheckbox-root": {
    backgroundColor: "transparent",
  },
  ".MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
}));

export const PaymentMethodsButton = styled(Button)(() => ({
  textTransform: "none",
  color: "inherit",
  width: "max-content",
  height: "40px",
  borderRadius: "3px",
  border: "1px solid rgba(0,0,0,0.1)",
  ":hover": {
    color: "#ee4d2d",
    border: "1px solid #EE4D2D",
    backgroundColor: "transparent",
  },
  ".active": {
    color: "#ee4d2d",
    border: "1px solid #EE4D2D",
    backgroundColor: "transparent",
  },
}));

export const PlaceOrderButton = styled(Button)(() => ({
  marginRight: "50px",
  textTransform: "none",
  color: "white",
  backgroundColor: "#ee4d2d",
  width: "200px",
  ":hover": {
    opacity: "0.8",
    backgroundColor: "#ee4d2d",
    color: "white",
  },
}));

export const OKButton = styled(Button)(() => ({
  position: "absolute",
  marginLeft: "350px",
  marginTop: "100px",
  color: "white",
  backgroundColor: "#ee4d2d",
  border: "2px solid black",
  width: "100px",
  ":hover": {
    backgroundColor: "#EE4D2D",
    opacity: "0.8",
  },
}));

export const DeliveryAddressContainer = styled(Container)(() => ({
  borderTop: "5px solid #ee4d2d",
  backgroundColor: "white",
  minWidth: "1200px",
  height: "130px",
  margin: "20px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
}));

export const MessageInput = styled(Input)(() => ({
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "3px",
  backgroundColor: "white",
  fontSize: "0.8rem",
  padding: "5px 20px",
  width: "400px",
}));

export const MessageInputBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  border: "1px dashed rgba(0,0,0,0.1)",
  width: "50%",
  justifyContent: "center",
}));

export const ShippingSummaryBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "50%",
  border: "1px dashed rgba(0,0,0,0.1)",
}));

export const OrderTotalBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "40%",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
}));

export const PlaceOrderContainer = styled(Container)(() => ({
  backgroundColor: "#FFFEFB",
  minWidth: "1200px",
  margin: "0 auto",
  height: "250px",
  borderTop: "1px solid rgba(0,0,0,0.1)",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
}));

export const StyledTableContainer = styled(TableContainer)(() => ({
  width: "100%",
  borderBottom: "1px dashed rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "flex-end",
  height: "160px",
}));

export const StyledTable = styled(Table)(() => ({
  marginRight: "50px",
  width: "300px",
  ".MuiTableCell-root": {
    border: "none",
    padding: "5px",
  },
}));

export const PlaceOrderBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "90px",
}));

export const PaymentMethodsContainer = styled(Container)(() => ({
  backgroundColor: "white",
  minWidth: "1200px",
  height: "150px",
  margin: "20px auto 0 auto",
  display: "flex",
  alignItems: "center",
}));
