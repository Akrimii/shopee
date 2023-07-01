import { LogoutButton } from "./TooltipStyle";

interface Props {
  onLogout: () => void;
}
function AccountLogout({ onLogout }: Props) {
  return (
    <LogoutButton disableRipple onClick={onLogout}>
      Logout
    </LogoutButton>
  );
}

export default AccountLogout;
