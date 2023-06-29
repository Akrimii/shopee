import { Button, Typography } from "@mui/material";
import { GrayContainer } from "./ProductPageStyle";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  onSeeAll: () => void;
}
function ProductPageE4({ onSeeAll }: Props) {
  return (
    <GrayContainer sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        sx={{ color: "#757575", fontWeight: "bolder", fontSize: "1rem" }}
      >
        YOU MAY ALSO LIKE
      </Typography>
      <Button
        variant="text"
        disableRipple
        onClick={onSeeAll}
        sx={{
          color: "#EE4D2D",
          textTransform: "capitalize",
          ":hover": { backgroundColor: "transparent" },
          ":active": { backgroundColor: "transparent" },
        }}
        endIcon={<MdKeyboardArrowRight />}
      >
        See All
      </Button>
    </GrayContainer>
  );
}

export default ProductPageE4;
