import { Box, Typography } from "@mui/material";
import { PaymentMethodsButton, PaymentMethodsContainer } from "./CheckoutStyle";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  selected: string | null;
  handlePaymentMethod: (method: string) => void;
}
function CheckoutE4({ selected, handlePaymentMethod }: Props) {
  const allPaymentMethods: string[] = [
    "Online Banking",
    "Maybank2u",
    "ShopeePay (RM0.10)",
    "Credit / Debit Card",
    "Cash Payment at Convenience Stores",
    "Cash on Delivery",
    "Credit Card Installment",
    "SPayLater (RM0.00)",
    "Apple Pay",
    "Google Pay",
  ];
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
            key={index}
            disableRipple
            variant="outlined"
            onClick={() => handlePaymentMethod(method)}
            endIcon={
              method === selected && <CheckIcon style={{ color: "#ee4d2d" }} />
            }
            className={method === selected ? "selectedButton" : ""}
          >
            {method}
          </PaymentMethodsButton>
        ))}
      </Box>
    </PaymentMethodsContainer>
  );
}

export default CheckoutE4;
