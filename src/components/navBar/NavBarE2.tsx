import { Stack } from "@mui/material";
import {
  LightTooltip,
  StyledBreadcrumbs,
  StyledButton,
  StyledLink,
} from "./NavBarStyle";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { LoggedUser } from "../../App";
import NotificationLoggedOut from "../tooltip/NotificationLoggedOut";
import NotificationLoggedIn from "../tooltip/NotificationLoggedIn";
import AccountLogout from "../tooltip/AccountLogout";

interface Props {
  loggedInUser: LoggedUser;
  isLogin: boolean;
  onLogout: () => void;
}

function NavBarE2({ loggedInUser, isLogin, onLogout }: Props) {
  const x = (
    <LightTooltip title={<AccountLogout onLogout={onLogout} />} arrow>
      <StyledButton
        variant="text"
        startIcon={<RiAccountCircleFill size="1.5rem" />}
        sx={{ textTransform: "none", fontSize: "0.9rem" }}
      >
        {loggedInUser}
      </StyledButton>
    </LightTooltip>
  );

  const y = (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator="|"
      sx={{ fontWeight: "bold", paddingTop: "8px" }}
    >
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <StyledLink>Sign Up</StyledLink>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <StyledLink>Login</StyledLink>
      </Link>
    </StyledBreadcrumbs>
  );

  return (
    <Stack direction="row">
      <LightTooltip
        arrow
        title={
          isLogin ? (
            <NotificationLoggedIn loggedInUser={loggedInUser} />
          ) : (
            <NotificationLoggedOut />
          )
        }
        placement="bottom-end"
      >
        <StyledButton
          disableRipple
          variant="text"
          startIcon={<BsBell size="1rem" />}
          sx={{ textTransform: "none" }}
        >
          Notifications
        </StyledButton>
      </LightTooltip>
      <StyledLink href="https://help.shopee.com.my/portal" target="_blank">
        <StyledButton
          disableRipple
          variant="text"
          startIcon={<AiOutlineQuestionCircle size="1.1rem" />}
        >
          Help
        </StyledButton>
      </StyledLink>

      {loggedInUser !== "" ? x : y}
    </Stack>
  );
}

export default NavBarE2;
