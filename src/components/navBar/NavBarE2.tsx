import { Stack } from "@mui/material";
import {
  LightTooltip,
  StyledBreadcrumbs,
  StyledButton,
  StyledLink,
} from "./NavBarStyle";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsBell, BsChevronDown } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { LoggedUser } from "../../App";
import NotificationLoggedOut from "../tooltip/NotificationLoggedOut";
import NotificationLoggedIn from "../tooltip/NotificationLoggedIn";
import AccountLogout from "../tooltip/AccountLogout";
import Language from "../tooltip/Language";

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
      <LightTooltip arrow title={<Language />}>
        <StyledButton
          disableRipple
          variant="text"
          startIcon={<FiGlobe size="1rem" />}
          endIcon={<BsChevronDown size="0.8rem" />}
        >
          English
        </StyledButton>
      </LightTooltip>
      {loggedInUser !== "" ? x : y}
    </Stack>
  );
}

export default NavBarE2;
