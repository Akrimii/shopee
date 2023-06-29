import { Breadcrumbs, Container, Input, Typography } from "@mui/material";
import {
  Search,
  StyledAppBar,
  StyledContainer,
  StyledSearchButton,
} from "./ShoppingCartStyle";
import { AiOutlineSearch } from "react-icons/ai";
import NavBarE1 from "../navBar/NavBarE1";
import NavBarE2 from "../navBar/NavBarE2";
import ShopeeLogo from "../shopeeLogo/ShopeeLogo";
import { useForm, FieldValues } from "react-hook-form";
import { LoggedUser } from "../../App";

interface Props {
  onSubmit: (data: FieldValues) => void;
  loggedInUser: LoggedUser;
  isLogin: boolean;
  onLogout: () => void;
}

function ShoppingCartE1({ onSubmit, loggedInUser, isLogin, onLogout }: Props) {
  const { register, handleSubmit, reset } = useForm();
  return (
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
            Shopping Cart
          </Typography>
        </Breadcrumbs>

        <Search
          onSubmit={handleSubmit((data) => {
            onSubmit(data), reset();
          })}
        >
          <Input
            disableUnderline
            {...register("search")}
            placeholder="Search"
            name="search"
            style={{ width: "100%" }}
          />
          <StyledSearchButton disableRipple type="submit">
            <AiOutlineSearch />
          </StyledSearchButton>
        </Search>
      </Container>
    </StyledAppBar>
  );
}

export default ShoppingCartE1;
