import {
  AppBar,
  Container,
  Stack,
  Typography,
  Link,
  Button,
  Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(() => ({
  position: "static",
  boxShadow: "none",
  height: "83px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "100vw",
  minWidth: "1200px",
}));

export const OrangeContainer = styled("div")(() => ({
  position: "static",
  backgroundColor: "#EE4D2D",
  height: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  minWidth: "1200px",
}));

export const AppBarContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
}));

export const AppBarStack = styled(Stack)(() => ({
  display: "flex",
  alignItems: "baseline",
  gap: "10px",
}));

export const NeedHelp = styled(Link)(() => ({
  color: "#EE4D2D",
  textDecoration: "none",
  fontFamily: "sans-serif",
  fontSize: "0.8rem",
}));

export const SignUpCard = styled(Card)(() => ({
  backgroundColor: "white",
  height: "370px",
  width: "330px",
  boxShadow: "none",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  padding: "30px",
}));

export const NextButton = styled(Button)(() => ({
  backgroundColor: "#EE4D2D",
  width: "100%",
  boxShadow: "none",
  color: "white",
  borderRadius: "2px",
  ":disabled": {
    backgroundColor: "#ee4d2d",
    opacity: "0.8",
  },
}));

export const LogInButton = styled(Typography)(() => ({
  paddingLeft: "4px",
  fontWeight: "bold",
  ":hover": {
    textDecoration: "underline",
  },
}));
