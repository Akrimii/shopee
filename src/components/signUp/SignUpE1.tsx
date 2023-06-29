import { Typography } from "@mui/material";
import {
  StyledAppBar,
  AppBarContainer,
  AppBarStack,
  StyledLink,
} from "./SignUpStyle";

import ShopeeLogo from "../shopeeLogo/ShopeeLogo";

function SignUpE1() {
  return (
    <StyledAppBar>
      <AppBarContainer>
        <AppBarStack direction="row">
          <ShopeeLogo />
          <Typography variant="h5" sx={{ color: "black" }}>
            Sign Up
          </Typography>
        </AppBarStack>
        <StyledLink href="https://help.shopee.com.my/portal" target="_blank">
          Need Help?
        </StyledLink>
      </AppBarContainer>
    </StyledAppBar>
  );
}

export default SignUpE1;
