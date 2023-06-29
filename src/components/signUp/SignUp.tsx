import { Container, Typography } from "@mui/material";
import ShopeeBigLogo from "../shopeeLogo/ShopeeBigLogo";
import SignUpE1 from "./SignUpE1";
import {
  ErrorMessage,
  LogInButton,
  NextButton,
  OrangeContainer,
  SignUpCard,
  StyledForm,
  StyledInput,
  StyledLink,
} from "./SignUpStyle";
import { Link, useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schema } from "../../utilities/signUpSchema";

type FormData = z.infer<typeof schema>;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  function onSubmit(data: FieldValues) {
    const users = localStorage.getItem("loginInfo");
    const loginInfo = users !== null ? JSON.parse(users) : [];
    loginInfo.push(data);
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    navigate("/login");
  }

  return (
    <>
      <SignUpE1 />
      <OrangeContainer>
        <ShopeeBigLogo />
        <SignUpCard>
          <Typography variant="h6">Sign Up</Typography>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              {...register("userName")}
              disableUnderline
              name="userName"
              placeholder="User Name"
            />
            {errors.userName && (
              <ErrorMessage>{errors.userName.message}</ErrorMessage>
            )}

            <StyledInput
              {...register("phoneNumber")}
              disableUnderline
              name="phoneNumber"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}

            <StyledInput
              type="password"
              {...register("password1")}
              disableUnderline
              name="password1"
              placeholder="Password"
            />
            {errors.password1 && (
              <ErrorMessage>{errors.password1.message}</ErrorMessage>
            )}

            <StyledInput
              type="password"
              {...register("password2")}
              disableUnderline
              name="password2"
              placeholder="Re-enter Password"
            />
            {errors.password2 && (
              <ErrorMessage>{errors.password2.message}</ErrorMessage>
            )}

            <NextButton disableRipple type="submit" variant="contained">
              Sign Up
            </NextButton>
          </StyledForm>
          <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
            By signing up, you agree to Shopee's{" "}
            <StyledLink
              href="https://help.shopee.com.my/portal/article/77215"
              target="_blank"
            >
              Terms of Service
            </StyledLink>{" "}
            &
            <StyledLink
              href="https://help.shopee.com.my/portal/article/77216"
              target="_blank"
            >
              {" "}
              Privacy Policy
            </StyledLink>
          </Typography>

          <Container
            sx={{ color: "#EE4D2D", display: "flex", justifyContent: "center" }}
          >
            <Typography variant="subtitle2" sx={{ color: "#A1A1A1" }}>
              Have an account?
            </Typography>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#EE4D2D" }}
            >
              <LogInButton variant="subtitle2">Log In</LogInButton>
            </Link>
          </Container>
        </SignUpCard>
      </OrangeContainer>
    </>
  );
}

export default SignUp;
