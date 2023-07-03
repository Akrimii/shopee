import { Card, CardMedia, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Div = styled("div")(() => ({
  marginBottom: "50px",
}));
export const CategoriesContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "gray",
  minWidth: "1200px",
  height: "406px",
  backgroundColor: "white",
  flexWrap: "wrap",
  alignContent: "flex-start",
}));

export const CategoryHeader = styled(Typography)(() => ({
  width: "100%",
  height: "60px",
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "#757575",
}));

export const CategoryCard = styled(Card)(() => ({
  height: 150,
  width: 126.5,
  paddingTop: "10px",
  borderRadius: "1px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "none",
  border: "1px solid #F2F2F2",
  ":hover": {
    transform: "scale(1.02)",
    boxShadow: "inset 0px 0px 5px 1px #F2F2F2",
  },
}));

export const CategoryCardMedia = styled(CardMedia)(() => ({
  height: 20,
  padding: "20px",
  aspectRatio: 1,
}));

export const CategoryCardName = styled(Typography)(() => ({
  textTransform: "capitalize",
  fontSize: "0.85rem",
  textAlign: "center",
}));
