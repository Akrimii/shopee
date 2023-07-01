import { Button, Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Container)(() => ({
  position: "static",
  backgroundColor: "inherit",
  minWidth: "1200px",
  borderBottom: "1px solid #F2F2F2",
  padding: "40px 0 20px 0",
}));

export const Title = styled(Typography)(() => ({
  fontSize: "0.8rem",
  fontWeight: "bolder",
  color: "#757575",
  paddingBottom: "10px",
}));

export const EachParagraph = styled(Typography)(() => ({
  fontSize: "0.75rem",
  color: "#757575",
}));

export const EachSection = styled("div")(() => ({
  paddingBottom: "20px",
}));

export const WhiteBox = styled("div")(() => ({
  borderTop: "5px solid #EE4D2D ",
  backgroundColor: "white",
  width: "100vw",
}));

export const StyledLink = styled(Link)(() => ({
  color: "#757575",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  fontWeight: "bolder",
  ":hover": {
    color: "#EE4D2D",
  },
}));

export const CategoriesButton = styled(Button)(() => ({
  color: "#757575",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  fontWeight: "bolder",
  padding: 0,
  ":hover": {
    color: "#ee4d2d",
    backgroundColor: "transparent",
  },
}));
