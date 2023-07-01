import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import {
  AddNewAddressButton,
  DeliveryAddressContainer,
  StyledAppBar,
  StyledContainer,
  UserAddressBox,
} from "./CheckoutStyle";
import NavBarE1 from "../navBar/NavBarE1";
import NavBarE2 from "../navBar/NavBarE2";
import ShopeeLogo from "../shopeeLogo/ShopeeLogo";
import { LoggedUser } from "../../App";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import CheckoutE2 from "./CheckoutE2";

interface Props {
  loggedInUser: LoggedUser;
  isLogin: boolean;
  onLogout: () => void;
  onSetAddress: (data: FieldValues) => void;
  address: Address | undefined;
}

export type Address = FieldValues;

function CheckoutE1({
  loggedInUser,
  isLogin,
  onLogout,
  onSetAddress,
  address,
}: Props) {
  const [open, setOpen] = useState(false);

  function onSubmitAddressForm(data: FieldValues) {
    onSetAddress(data);
    setOpen(false);
  }

  return (
    <>
      <StyledAppBar>
        <StyledContainer disableGutters>
          <NavBarE1 />
          <NavBarE2
            isLogin={isLogin}
            loggedInUser={loggedInUser}
            onLogout={onLogout}
          />
        </StyledContainer>

        <Container
          disableGutters
          sx={{
            padding: "30px 20px 0 20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Breadcrumbs
            separator="|"
            sx={{
              color: "#EE4D2D",
              fontSize: "1.5rem",
            }}
          >
            <ShopeeLogo />
            <Typography sx={{ color: "#EE4D2D", fontSize: "1.2rem" }}>
              Checkout
            </Typography>
          </Breadcrumbs>
        </Container>
      </StyledAppBar>

      <DeliveryAddressContainer>
        <Typography
          sx={{ display: "flex", alignItems: "center", color: "#EE4D2D" }}
        >
          <LocationOnIcon />
          Delivery Address
        </Typography>
        {address && (
          <UserAddressBox>
            <Typography sx={{ fontWeight: "bolder" }}>
              {address.fullName}
              {"   "}
              {address.phoneNumber}
            </Typography>
            <Typography sx={{ color: "#757575" }}>
              {address?.unit} {address.streetName}, {address.postalCode}{" "}
              {address.state.toUpperCase()}.
            </Typography>
            <Box
              sx={{
                border: "1px solid #ee4d2d",
                color: "#ee4d2d",
                padding: "0px 5px",
                margin: "0 10px",
              }}
            >
              <Typography sx={{ fontSize: "0.6rem" }}>Default</Typography>
            </Box>

            <Button
              onClick={() => setOpen(true)}
              variant="text"
              disableRipple
              sx={{
                textTransform: "none",
                ":hover": { backgroundColor: "transparent" },
              }}
            >
              Change
            </Button>
          </UserAddressBox>
        )}

        {!address && (
          <AddNewAddressButton
            startIcon={<AddIcon />}
            disableRipple
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Add New Address{" "}
          </AddNewAddressButton>
        )}
      </DeliveryAddressContainer>
      <CheckoutE2
        open={open}
        onSubmitAddressForm={onSubmitAddressForm}
        onCancelButton={() => setOpen(false)}
      />
    </>
  );
}

export default CheckoutE1;
