import { Box, Typography } from "@mui/material";
import { PaymentMethodsButton, PaymentMethodsContainer } from "./CheckoutStyle";
import CheckIcon from "@mui/icons-material/Check";
import { allPaymentMethods } from "../../assets/allPaymentMethods";

interface Props {
  selectedPaymentMethod: string | null;
  handlePaymentMethod: (method: string) => void;
}
function CheckoutE4({ selectedPaymentMethod, handlePaymentMethod }: Props) {
  return (
    <PaymentMethodsContainer>
      <Typography sx={{ flexBasis: "20%", fontSize: "1.2rem" }}>
        Payment Method
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {allPaymentMethods.map((method, index) => (
          <PaymentMethodsButton
            sx={
              method === selectedPaymentMethod
                ? { border: "2px solid #ee4d2d" }
                : { border: "1px solid rgba(0,0,0,0.1)" }
            }
            key={index}
            disableRipple
            variant="outlined"
            onClick={() => handlePaymentMethod(method)}
            endIcon={
              method === selectedPaymentMethod && (
                <CheckIcon style={{ color: "#ee4d2d" }} />
              )
            }
          >
            {method}
          </PaymentMethodsButton>
        ))}
      </Box>
    </PaymentMethodsContainer>
  );
}

export default CheckoutE4;
