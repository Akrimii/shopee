import { AppBar, Breadcrumbs, Link, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export const StyledAppBar = styled(AppBar)(() => ({
  position: "sticky",
  boxShadow: "none",
  height: "130px",
  width: "100%",
  minWidth: "1200px",
  borderBottom: "1px solid lightgray",
  background:
    "linear-gradient(to bottom, #EE4D2D 0%, #EE4D2D 30%, white 30%, white 100%)",
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
    cursor: "pointer",
  },
}));

export const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  color: "white",
  fontSize: "0.8rem",
  ":hover": {
    backgroundColor: "transparent",
    color: "#E0E0E0",
  },
}));

export const Search = styled("form")(() => ({
  display: "flex",
  backgroundColor: "white",
  width: "500px",
  height: "35px",
  padding: "0px 0px 0px 25px",
  borderRadius: "1px",
  justifyContent: "space-between",
  marginRight: "10px",
  marginLeft: "40px",
  border: "2px solid #EE4D2D",
}));

export const StyledSearchButton = styled(Button)(() => ({
  backgroundColor: "#EE4D2D",
  color: "white",
  fontSize: "1.1rem",
  borderRadius: "0",
  ":hover": {
    backgroundColor: "rgba(238,77,45,0.85)",
  },
}));

export const StyledContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: "0 10px",
}));

export const LightOrangeContainer = styled(Container)(() => ({
  margin: "50px auto 20px auto",
  border: "2px solid #EE4D2D",
  minWidth: "1200px",
  height: "50px",
  backgroundColor: "#FFFBF8",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  borderRadius: "4px",
}));

export const EachButton = styled(Button)(() => ({
  borderRadius: "1px",
  border: "1px solid #757575",
  color: "black",
  width: "40px",
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

export const GoShoppingNowButton = styled(Button)(() => ({
  backgroundColor: "#EE4D2D",
  width: "max-content",
  boxShadow: "none",
  color: "white",
  borderRadius: "2px",
  padding: "5px 30px",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "rgba(238,77,45,0.9)",
  },
}));

export const TotalItemsContainer = styled(Container)(() => ({
  position: "sticky",
  bottom: 0,
  left: 0,
  right: 0,
  height: "150px",
  borderRadius: "5px 5px 0px 0px;",
  minWidth: "1200px",
  margin: "50px auto 0  auto",
  boxShadow: "1px -4px 5px 0px rgba(0,0,0,0.1)",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
  paddingTop: "50px",
}));

export const FreeContainer = styled(Container)(() => ({
  position: "absolute",
  height: "40px",
  width: "40px",
  color: "black",
  paddingTop: "23px",
  paddingLeft: "2px",
}));

export const ProductCardGrid = styled(Container)(() => ({
  minWidth: "1200px",
  display: "flex",
  flexWrap: "wrap",
  padding: "24px 0",
  gap: "15px",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

export const StyledDataGrid = styled(DataGrid)(() => ({
  padding: "0 30px",
  backgroundColor: "white",
  borderRadius: "5px",
  border: "none",
  "& .MuiDataGrid-row": {
    ":hover": { backgroundColor: "transparent" },
  },
  ".MuiDataGrid-columnHeader": {
    color: "#757575",
  },
  ".MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "transparent",
  },
  ".MuiDataGrid-row.Mui-selected": {
    backgroundColor: "transparent",
  },
  ".MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  ".MuiDataGrid-cell:focus": {
    outline: "none",
  },
  ".MuiButtonBase-root-MuiCheckbox-root:hover": {
    backgroundColor: "none",
  },
  ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
    color: "#ee4d2d",
  },
  ".MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
  ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
    backgroundColor: "transparent",
  },
  ".MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
}));

export const CheckOutButton = styled(Button)(() => ({
  width: "200px",
  textTransform: "capitalize",
  borderRadius: "2px",
  backgroundColor: "#EE4D2D",
  color: "white",
  boxShadow: "none",
  fontSize: "1rem",
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
