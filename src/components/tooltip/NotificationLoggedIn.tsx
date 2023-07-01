import { Container, Stack, Typography } from "@mui/material";
import { NotificationBox, StyledSiShopee } from "./TooltipStyle";

interface Props {
  loggedInUser: string;
}

function NotificationLoggedIn({ loggedInUser }: Props) {
  return (
    <Container
      disableGutters
      sx={{ width: "300px", height: "150px", padding: "10px" }}
    >
      <Typography
        sx={{ fontSize: "0.9rem", color: "#757575", paddingBottom: "10px" }}
      >
        Recently Received Notifications
      </Typography>
      <NotificationBox>
        <StyledSiShopee />
        <Stack direction="column">
          <Typography sx={{ fontSize: "0.8rem" }}>
            Hi {loggedInUser}, Welcome to Shopee!
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", color: "#757575" }}>
            Enjoy free shipping for your first purchase, we hope you have the
            best online shopping experience here
          </Typography>
        </Stack>
      </NotificationBox>
    </Container>
  );
}

export default NotificationLoggedIn;
