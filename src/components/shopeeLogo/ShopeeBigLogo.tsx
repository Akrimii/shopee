import { SiShopee } from "react-icons/si";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography } from "@mui/material";

const BigLogo = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "450px",
  height: "430px",
  alignItems: "center",
  margin: "0",
  justifyContent: "space-between",
}));

const BigShopeeName = styled(Typography)(() => ({
  color: "white",
}));

const TheLeading = styled(Typography)(() => ({
  color: "white",
  textAlign: "center",
  paddingBottom: "30px",
}));

function ShopeeBigLogo() {
  return (
    <BigLogo>
      <Stack>
        <SiShopee size="200px" color="white" />
        <BigShopeeName variant="h2">Shopee</BigShopeeName>
      </Stack>

      <TheLeading variant="h5">
        The leading online shopping platform in Southeast Asia and Taiwan
      </TheLeading>
    </BigLogo>
  );
}

export default ShopeeBigLogo;
