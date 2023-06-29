import { Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(() => ({
  fontSize: "0.8rem",
  fontWeight: "bolder",
  color: "black",
}));

export const ListContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "max-content",
}));

export const BorderedContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  minWidth: "1200px",
  height: "100%px",
  backgroundColor: "#f2f2f2",
  alignContent: "flex-start",
  padding: "50px 10px",
  borderTop: "1px solid rgba(0,0,0,0.1)",
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#757575",
  ":hover": { textDecoration: "underline" },
}));
