import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductCardGrid = styled(Container)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16.6px",
  justifyContent: "flex-start",
  padding: "10px 0 10px 10px",
  alignItems: "flex-start",
}));

export const SideBarSubTitle = styled(Typography)(() => ({
  fontSize: "0.85rem",
  fontWeight: "bolder",
  color: "#757575",
}));

export const SideBarBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "20px 10px",
  gap: "30px",
}));

export const RatingButton = styled(Button)(() => ({
  marginBottom: "3px",
  textTransform: "capitalize",
  color: "#757575",
  borderRadius: "30px",
  border: "none",
  ":hover": { background: "rgba(0,0,0,0.1)", border: "none" },
}));

export const StyledDiv = styled("div")(() => ({
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingBottom: "20px",
}));

export const NoResultsContainer = styled(Container)(() => ({
  minWidth: "1200px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}));

export const ClearAllButton = styled(Button)(() => ({
  backgroundColor: "#ee4d2d",
  width: "100%",
  textTransform: "none",
  ":hover": {
    backgroundColor: "#ee4d2d",
    opacity: "0.8",
  },
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: "#757575",
  "&.Mui-checked": {
    color: "#ee4d2d",
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  color: "#757575",
  ".MuiTypography-root": { fontSize: "0.8rem" },
}));
