import { Card, CardContent, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";

export const Div = styled("div")(() => ({
  marginBottom: "50px",
}));

export const DailyDiscoverHeader = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#EE4D2D",
  minWidth: "1200px",
  height: "60px",
  backgroundColor: "white",
  borderBottom: "5px solid #EE4D2D ",
}));

export const ProductCardGrid = styled(Container)(() => ({
  minWidth: "1200px",
  display: "flex",
  flexWrap: "wrap",
  padding: "24px 0",
  gap: "10px",
  justifyContent: "space-between",
  alignContent: "flex-start",
}));

export const ProductCard = styled(Card)(() => ({
  width: 210,
  borderRadius: "2px",

  boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.2)",
  ":hover": {
    boxShadow: "0px 1px 4px 2px rgba(0,0,0,0.2)",
    transform: "scale(1.02)",
  },
}));

export const ProductCardContent = styled(CardContent)(() => ({
  height: "125px",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  ":last-child": {
    paddingBottom: "10px",
  },
}));

export const OriginalPrice = styled(Typography)(() => ({
  fontSize: "0.85rem",
  color: "#757575",
  display: "flex",
  alignItems: "baseline",
  textDecoration: "line-through",
}));

export const PriceContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "baseline",
  paddingLeft: "0px",
  gap: "3px",
}));

export const DiscountedPrice = styled(Typography)(() => ({
  color: "#EE4D2D",
  display: "flex",
  alignItems: "baseline",
}));

export const DiscountRibbonTextContainer = styled("div")(() => ({
  position: "absolute",
  width: "30px",
  height: "60px",
  textAlign: "center",
  marginLeft: "177px",
  marginTop: "1px",
}));

export const YellowRibbon = styled(BookmarkSharpIcon)(() => ({
  position: "absolute",
  fontSize: "60px",
  color: "#FFD839",
  opacity: "0.8",
  marginLeft: "162px",
  marginTop: "-7px",
}));
