import { Dialog, Typography } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
  openDialog: boolean;
}

function ProductPageE6({ openDialog }: Props) {
  return (
    <Dialog
      open={openDialog}
      PaperProps={{
        style: {
          backgroundColor: "rgba(0,0,0,0.5)",
          boxShadow: "none",
        },
      }}
      sx={{
        ".css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
          backgroundColor: "rgba(0,0,0,0)",
        },
      }}
    >
      <div
        style={{
          height: "180px",
          width: "370px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AiFillCheckCircle style={{ fontSize: "4rem", color: "#00BFA5" }} />
        <Typography sx={{ fontSize: "1.1rem", color: "white" }}>
          Item has been added to your shopping cart
        </Typography>
      </div>
    </Dialog>
  );
}

export default ProductPageE6;
