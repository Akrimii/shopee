import { Stack, Typography } from "@mui/material";
import { LoggedOutTooltipContainer, ToolTipButtons } from "./TooltipStyle";
import { Link } from "react-router-dom";

function NotificationLoggedOut() {
  return (
    <LoggedOutTooltipContainer disableGutters>
      <Stack direction="column" sx={{ margin: "auto", alignItems: "center" }}>
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png"
          style={{ width: "100px" }}
        />
        <Typography sx={{ fontSize: "0.9rem" }}>
          Log in to view notification
        </Typography>
      </Stack>
      <Stack direction="row">
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            width: "50%",
            height: "40px",
          }}
        >
          <ToolTipButtons disableRipple>Sign Up</ToolTipButtons>
        </Link>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            width: "50%",
            height: "40px",
          }}
        >
          <ToolTipButtons disableRipple>Login</ToolTipButtons>
        </Link>
      </Stack>
    </LoggedOutTooltipContainer>
  );
}

export default NotificationLoggedOut;
