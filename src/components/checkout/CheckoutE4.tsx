import { Box, Container, Typography } from "@mui/material";
import { PaymentMethodsButton } from "./CheckoutStyle";
import { useState } from "react";

function CheckoutE4() {
  const [selected, setSelected] = useState<string>();

  console.log(selected);

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
    <Container
      sx={{
        backgroundColor: "white",
        minWidth: "1200px",
        height: "150px",
        margin: "20px auto 0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
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
            variant="outlined"
            disableRipple
            onClick={() => setSelected(method)}
          >
            {method}
          </PaymentMethodsButton>
        ))}
      </Box>
    </Container>
  );
}

export default CheckoutE4;
