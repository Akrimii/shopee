import {
  AppBar,
  Breadcrumbs,
  Link,
  Button,
  Container,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export const StyledAppBar = styled(AppBar)(() => ({
  position: "sticky",
  boxShadow: "none",
  height: "120px",
  width: "100%",
  minWidth: "1200px",
  marginBottom: "50px",
}));

export const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
  color: "rgba(224,224,224,0.5)",
  fontSize: "0.8rem",
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
  ":hover": {
    color: "#E0E0E0",
  },
}));

export const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  color: "white",
  fontSize: "0.8rem",
  padding: "8px 8px",
  ":hover": {
    backgroundColor: "transparent",
    color: "#E0E0E0",
  },
}));

export const SearchButton = styled(Button)(() => ({
  width: "64px",
  height: "100%",
  backgroundColor: "#ee4d2d",
  borderRadius: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    backgroundColor: "rgba(238, 77, 45,0.8)",
  },
}));

export const FirstRowContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: "0 10px",
}));

export const SecondRowContainer = styled(Container)(() => ({
  padding: "20px 20px 0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

export const SearchForm = styled("form")(() => ({
  display: "flex",
  backgroundColor: "white",
  width: "70%",
  height: "35px",
  padding: "3px 3px 3px 25px",
  borderRadius: "3px",
  justifyContent: "space-between",
  marginRight: "10px",
  marginLeft: "0",
}));

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: 11,
    border: "1px solid rgba(0,0,0,0.1)",
    width: "max-content",
    height: "max-content",
    borderRadius: "2px",
    padding: 0,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
}));

export const TotalCartItemsChip = styled(Chip)(() => ({
  color: "#EE4D2D",
  backgroundColor: "white",
  position: "absolute",
  fontSize: "0.8rem",
  width: "30px",
  height: "20px",
  border: "2px solid #EE4D2D",
  marginLeft: "20px",
  marginTop: "5px",
  ".MuiChip-label": {
    padding: 0,
  },
}));

export const SignUpButton = styled(Button)(() => ({
  textTransform: "capitalize",
  color: "white",
  padding: 0,
  fontSize: "0.8rem",
  fontWeight: 700,
  height: "max-content",
  ":hover": {
    backgroundColor: "transparent",
    opacity: "0.8",
  },
}));
