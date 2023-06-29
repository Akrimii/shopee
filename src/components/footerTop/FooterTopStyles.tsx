import { Container, Link, Typography } from "@mui/material";
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
  width: "100%",
  borderTop: "5px solid #EE4D2D ",
  backgroundColor: "white",
  paddingBottom: "50px",
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
