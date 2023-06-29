import { Alert, Container, Typography } from "@mui/material";
import {
  LogInButton,
  NextButton,
  OrangeContainer,
  StyledInput,
  SignUpCard,
  StyledForm,
  ErrorMessage,
} from "../signUp/SignUpStyle";
import LoginE1 from "./LoginE1";
import ShopeeBigLogo from "../shopeeLogo/ShopeeBigLogo";
import { Link, useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { where } from "underscore";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";

interface FormData {
  phoneNumber: string;
  password1: string;
}

interface Props {
  onLoginPass: (data: FieldValues) => void;
}

function Login({ onLoginPass }: Props) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [alert, setAlert] = useState(false);

  function onSubmit(data: FieldValues) {
    const users = localStorage.getItem("loginInfo");
    const loginInfo = users !== null ? JSON.parse(users) : [];
    if (where(loginInfo, data).length > 0) {
      setAlert(false);
      navigate("/");
      onLoginPass(data);
    } else {
      setAlert(true);
    }
  }

  const alertSign = (
    <Alert
      icon={<HighlightOffIcon sx={{ fontSize: "inherit", color: "#ee4d2d" }} />}
      variant="outlined"
      severity="error"
      sx={{ borderRadius: "2px", padding: "2px 10px" }}
    >
      Your account and/or password is incorrect, please try again
    </Alert>
  );

  return (
    <>
      <LoginE1 />
      <OrangeContainer>
        <ShopeeBigLogo />
        <SignUpCard sx={{ gap: "40px" }}>
          <Typography variant="h6">Log In</Typography>

          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {alert && alertSign}

            <StyledInput
              {...register("phoneNumber", { required: true })}
              disableUnderline
              name="phoneNumber"
              placeholder="Phone Number"
            />
            {errors.phoneNumber?.type === "required" && (
              <ErrorMessage>Please enter this field</ErrorMessage>
            )}

            <StyledInput
              {...register("password1", { required: true })}
              type="password"
              disableUnderline
              name="password1"
              placeholder="Password"
            />
            {errors.password1?.type === "required" && (
              <ErrorMessage>Please enter this field</ErrorMessage>
            )}
            <NextButton disableRipple type="submit" variant="contained">
              Log In
            </NextButton>
          </StyledForm>

          <Container
            sx={{ color: "#EE4D2D", display: "flex", justifyContent: "center" }}
          >
            <Typography variant="subtitle2" sx={{ color: "#A1A1A1" }}>
              New to Shopee?
            </Typography>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#EE4D2D" }}
            >
              <LogInButton variant="subtitle2">Sign Up</LogInButton>
            </Link>
          </Container>
        </SignUpCard>
      </OrangeContainer>
    </>
  );
}

export default Login;
