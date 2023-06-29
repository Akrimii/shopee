import { Box, Button, Chip, Container, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WhiteContainer = styled(Container)(() => ({
  marginTop: "50px",
  minWidth: "1200px",
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  padding: "24px",
}));

export const BigPictureContainer = styled(Container)(() => ({
  background: "#f2f2f2",
  height: "450px",
  width: "450px",
  objectFit: "contain",
  display: "inline-flex",
  alignItems: "center",
}));

export const BigImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  overflow: "hidden",
}));

export const SmallImage = styled("img")(() => ({
  objectFit: "contain",
  width: "100px",
  height: "100px",
  overflow: "hidden",
}));

export const GrayBox = styled(Box)(() => ({
  gap: "30px",
  background: "#f2f2f2",
  height: "65px",
  width: "calc(100%-40px)",
  padding: "20px",
  display: "inline-flex",
  alignItems: "center",
}));

export const AddToCartButton = styled(Button)(() => ({
  padding: "10px 40px",
  textTransform: "capitalize",
  borderRadius: "2px",
  border: "1px solid #ee4d2d",
  color: "#EE4D2D",
  backgroundColor: "#FFEEE8",
  boxShadow: "none",
  fontSize: "1rem",
  ":hover": {
    opacity: "0.8rem",
    backgroundColor: "#FFEEE8",
  },
}));

export const BuyNowButton = styled(Button)(() => ({
  padding: "10px 40px",
  textTransform: "capitalize",
  borderRadius: "2px",
  backgroundColor: "#EE4D2D",
  color: "white",
  boxShadow: "none",
  fontSize: "1rem",
  ":hover": {
    opacity: "0.8",
    backgroundColor: "#ee4e2d",
  },
}));

export const StyledChip = styled(Chip)(() => ({
  backgroundColor: "#EE4D2D",
  color: "white",
  borderRadius: "2px",
  fontSize: "0.75rem",
  fontWeight: "bolder",
  height: "20px",
}));

export const TableRowNoBorder = styled(TableRow)(() => ({
  ".MuiTableCell-root": {
    borderBottom: "none",
  },
}));

export const ProductCardGrid = styled(Container)(() => ({
  minWidth: "1200px",
  display: "flex",
  flexWrap: "wrap",
  padding: "24px 0",
  gap: "15px",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

export const GrayContainer = styled(Container)(() => ({
  minWidth: "1200px",
  backgroundColor: "white",
  width: "100%",
  padding: 0,
  height: "50px",
  background: "#F2F2F2",
  marginTop: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
}));

export const EachButton = styled(Button)(() => ({
  borderRadius: "1px",
  border: "1px solid #757575",
  color: "black",
}));

export const LightOrangeContainer = styled(Container)(() => ({
  margin: "24px 0px",
  border: "1px solid #f2f2f2",
  width: "100%",
  height: "100%",
  padding: "24px 0px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#FFFBF8",
  color: "#EE4D2D",
}));

export const ReviewBox = styled(Box)(() => ({
  height: "max-content",
  width: "calc(100%-40px)",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  fontSize: "0.875rem",
  padding: "20px",
}));
