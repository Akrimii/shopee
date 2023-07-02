import { Dialog, Typography } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";
import { DialogDiv } from "./ProductPageStyle";

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
      <DialogDiv>
        <AiFillCheckCircle style={{ fontSize: "4rem", color: "#00BFA5" }} />
        <Typography sx={{ fontSize: "1.1rem", color: "white" }}>
          Item has been added to your shopping cart
        </Typography>
      </DialogDiv>
    </Dialog>
  );
}

export default ProductPageE6;
