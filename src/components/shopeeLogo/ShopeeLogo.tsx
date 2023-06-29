import { Stack, Typography } from "@mui/material";
import { SiShopee } from "react-icons/si";
import { Link } from "react-router-dom";

function ShopeeLogo() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
      <Typography variant="h5" sx={{ color: "#EE4D2D" }}>
        <Stack direction="row">
          <SiShopee />
          Shopee
        </Stack>
      </Typography>
    </Link>
  );
}

export default ShopeeLogo;
