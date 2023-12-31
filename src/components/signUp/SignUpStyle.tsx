import {
  AppBar,
  Container,
  Stack,
  Typography,
  Button,
  Card,
  Link,
  Input,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(() => ({
  position: "static",
  boxShadow: "none",
  height: "83px",
  backgroundColor: "white",
  minWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AppBarContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  width: "1200px",
  marginLeft: 0,
  marginRight: 0,
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

export const AppBarStack = styled(Stack)(() => ({
  display: "flex",
  alignItems: "baseline",
  gap: "10px",
}));

export const StyledLink = styled(Link)(() => ({
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
  justifyContent: "space-evenly",
  alignItems: "start",
  padding: "30px",
}));

export const NextButton = styled(Button)(() => ({
  backgroundColor: "#EE4D2D",
  width: "100%",
  boxShadow: "none",
  color: "white",
  borderRadius: "2px",
  ":hover": {
    backgroundColor: "#ee4d2d",
    opacity: "0.8",
  },
}));

export const LogInButton = styled(Typography)(() => ({
  paddingLeft: "4px",
  fontWeight: "bold",
  ":hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

export const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  justifyContent: "space-evenly",
}));

export const StyledInput = styled(Input)(() => ({
  width: "100%",
  border: "1px solid #757575",
  borderRadius: "2px",
  fontSize: "0.9rem",
  padding: "5px 10px",
  ":focus": {
    border: "2px solid red",
  },
}));

export const ErrorMessage = styled(Typography)(() => ({
  fontSize: "0.8rem",
  color: "#ee4d2d",
}));
