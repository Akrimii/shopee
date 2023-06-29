import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import {
  AddNewAddressButton,
  StyledAppBar,
  StyledContainer,
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
}

type Address = FieldValues;

function CheckoutE1({ loggedInUser, isLogin, onLogout }: Props) {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState<Address>();

  function onSubmitAddressForm(data: FieldValues) {
    setAddress(data);
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

      <Container
        sx={{
          borderTop: "5px solid #ee4d2d",
          backgroundColor: "white",
          minWidth: "1200px",
          height: "130px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{ display: "flex", alignItems: "center", color: "#EE4D2D" }}
        >
          <LocationOnIcon />
          Delivery Address
        </Typography>
        {address && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
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
              sx={{
                textTransform: "none",
                ":hover": { backgroundColor: "transparent" },
              }}
            >
              Change
            </Button>
          </Box>
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
      </Container>
      <CheckoutE2
        open={open}
        onSubmitAddressForm={onSubmitAddressForm}
        onCancelButton={() => setOpen(false)}
      />
    </>
  );
}

export default CheckoutE1;
