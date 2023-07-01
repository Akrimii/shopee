import { Container, ImageList, Link, Typography } from "@mui/material";
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

export const FooterBottomGrayDiv = styled("div")(() => ({
  backgroundColor: "#f2f2f2",
  height: "500px",
  width: "100%",
}));

export const Images = styled("img")(() => ({
  width: "60px",
  borderRadius: "2px",
  boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
}));

export const StyledImageList = styled(ImageList)(() => ({
  width: "200px",
  paddingBottom: "5px",
}));

export const DownloadImages = styled("img")(() => ({
  width: "120px",
  height: "max-content",
  borderRadius: "2px",
  boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
}));

export const QRCodeImage = styled("img")(() => ({
  width: "100px",
  borderRadius: "3px",
  boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
}));

export const CountriesContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "max-content",
}));
