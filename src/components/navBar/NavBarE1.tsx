import { Typography, Stack } from "@mui/material";
import { StyledLink, StyledBreadcrumbs } from "./NavBarStyle";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function NavBarE1() {
  return (
    <Stack direction="row" sx={{ paddingTop: "10px" }}>
      <StyledBreadcrumbs aria-label="breadcrumb" separator="|">
        <StyledLink
          href="https://seller.shopee.com.my/portal/inactive-seller?inactive_shop_id=283317406"
          target="_blank"
        >
          Seller Center
        </StyledLink>

        <StyledLink href="https://shopee.com.my/web" target="_blank">
          Download
        </StyledLink>

        <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
          Follow us on
        </Typography>
      </StyledBreadcrumbs>

      <StyledLink href="https://www.facebook.com/ShopeeMY" target="_blank">
        <FaFacebook size="1.1rem" style={{ padding: "0 10px 0 5px" }} />
      </StyledLink>

      <StyledLink href="https://www.instagram.com/Shopee_MY/" target="_blank">
        <AiFillInstagram size="1.2rem" />
      </StyledLink>
    </Stack>
  );
}

export default NavBarE1;
