import { Typography } from "@mui/material";
import {
  AppBarContainer,
  AppBarStack,
  StyledLink,
  StyledAppBar,
} from "../signUp/SignUpStyle";
import ShopeeLogo from "../shopeeLogo/ShopeeLogo";

function LoginE1() {
  return (
    <StyledAppBar>
      <AppBarContainer>
        <AppBarStack direction="row">
          <ShopeeLogo />
          <Typography variant="h5" sx={{ color: "black" }}>
            Log In
          </Typography>
        </AppBarStack>
        <StyledLink href="https://help.shopee.com.my/portal" target="_blank">
          Need Help?
        </StyledLink>
      </AppBarContainer>
    </StyledAppBar>
  );
}

export default LoginE1;
