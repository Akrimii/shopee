import { Button } from "@mui/material";

interface Props {
  onLogout: () => void;
}
function AccountLogout({ onLogout }: Props) {
  return (
    <Button
      disableRipple
      onClick={onLogout}
      sx={{
        color: "black",
        textTransform: "capitalize",
        width: "150px",
        padding: "8px",
        ":hover": {
          color: "#EE4D2D",
          backgroundColor: "#F2F2F2",
        },
      }}
    >
      Logout
    </Button>
  );
}

export default AccountLogout;
