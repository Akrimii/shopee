import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material";
import {
  StyledInput,
  ErrorMessage,
  CancelButton,
  SubmitButton,
} from "./CheckoutStyle";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  open: boolean;
  onSubmitAddressForm: (data: FieldValues) => void;
  onCancelButton: () => void;
}

function CheckoutE2({ open, onSubmitAddressForm, onCancelButton }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Dialog open={open}>
      <DialogTitle>New Address</DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmitAddressForm(data);
            reset();
          })}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            height: "400px",
          }}
        >
          <StyledInput
            {...register("fullName", { required: true })}
            disableUnderline
            name="fullName"
            placeholder="Full Name"
          />
          {errors.fullName?.type === "required" && (
            <ErrorMessage>Field is required</ErrorMessage>
          )}
          <StyledInput
            {...register("phoneNumber", { required: true })}
            disableUnderline
            name="phoneNumber"
            placeholder="Phone Number"
          />
          {errors.phoneNumber?.type === "required" && (
            <ErrorMessage>Field is required</ErrorMessage>
          )}

          <StyledInput
            {...register("state", { required: true })}
            disableUnderline
            name="state"
            placeholder="State, Area"
          />
          {errors.state?.type === "required" && (
            <ErrorMessage>Field is required</ErrorMessage>
          )}
          <StyledInput
            {...register("postalCode", { required: true })}
            disableUnderline
            name="postalCode"
            placeholder="Postal Code"
          />
          {errors.postalCode?.type === "required" && (
            <ErrorMessage>Field is required</ErrorMessage>
          )}
          <StyledInput
            {...register("unit")}
            disableUnderline
            name="unit"
            placeholder="Unit No (Optional)"
          />
          <StyledInput
            {...register("streetName", { required: true })}
            disableUnderline
            name="streetName"
            placeholder="House Number, Building, Street Name"
          />
          {errors.streetName?.type === "required" && (
            <ErrorMessage>Field is required</ErrorMessage>
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "5px" }}>
            <CancelButton disableRipple onClick={onCancelButton}>
              Cancel
            </CancelButton>
            <SubmitButton disableRipple variant="contained" type="submit">
              Submit
            </SubmitButton>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CheckoutE2;
