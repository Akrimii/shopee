import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SiShopee } from "react-icons/si";
export const LoggedOutTooltipContainer = styled(Container)(() => ({
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ToolTipButtons = styled(Button)(() => ({
  borderRadius: "1px",
  backgroundColor: "#F2F2F2",
  color: "black",
  textTransform: "capitalize",
  fontFamily: "inherit",
  fontSize: "0.9rem",
  border: "none",
  textAlign: "center",
  width: "100%",
  height: "100%",
  ":hover": {
    backgroundColor: "#E8E8E8",
    color: "#EE4D2D",
    border: "none",
  },
}));

export const StyledSiShopee = styled(SiShopee)(() => ({
  color: "white",
  fontSize: "3rem",
  backgroundColor: "#EE4D2D",
  padding: "5px",
  flexBasis: "40%",
}));

export const LanguageButton = styled(Button)(() => ({
  textTransform: "capitalize",
  color: "black",
  border: "none",
  padding: "8px",
  ":hover": {
    color: "#ee4d2d",
    border: "none",
    backgroundColor: "#F2F2F2",
  },
}));

export const ViewMyCartButton = styled(Button)(() => ({
  width: "100px",
  textTransform: "capitalize",
  borderRadius: "2px",
  backgroundColor: "#EE4D2D",
  color: "white",
  boxShadow: "none",
  fontSize: "0.8rem",
  ":hover": {
    backgroundColor: "rgba(238, 77, 45,0.7)",
    boxShadow: "none",
  },
  ":active": { boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5);" },
  ":disabled": {
    backgroundColor: "rgba(238, 77, 45,0.7)",
    color: "white",
  },
}));

export const LogoutButton = styled(Button)(() => ({
  color: "black",
  textTransform: "capitalize",
  width: "150px",
  padding: "8px",
  ":hover": {
    color: "#EE4D2D",
    backgroundColor: "#F2F2F2",
  },
}));

export const NotificationBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
}));

export const EmptyShoppingCartBox = styled(Box)(() => ({
  width: "290px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const EachCartItemContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "row",
  width: "290px",
  alignItems: "center",
  padding: "5px",
  justifyContent: "space-between",
  ":hover": {
    backgroundColor: "#F2F2F2",
  },
}));

export const ImageBox = styled(Box)(() => ({
  backgroundColor: "#F2F2F2",
  marginRight: "5px",
  height: "min-content",
  width: "min-content",
}));

export const StyledImage = styled("img")(() => ({
  width: "50px",
  height: "50px",
  objectFit: "contain",
  overflow: "hidden",
}));
