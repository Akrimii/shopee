import {
  FirstRowContainer,
  SearchButton,
  SearchForm,
  SecondRowContainer,
  StyledAppBar,
  TotalCartItemsChip,
} from "./NavBarStyle";
import { SiShopee } from "react-icons/si";
import NavBarE1 from "./NavBarE1";
import NavBarE2 from "./NavBarE2";
import { Link, useNavigate } from "react-router-dom";
import { Input, Stack, Typography } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { useForm, FieldValues } from "react-hook-form";
import { CartItem, LoggedUser } from "../../App";
import { CgShoppingCart } from "react-icons/cg";
import { LightTooltip } from "./NavBarStyle";
import ShoppingCartEmpty from "../tooltip/ShoppingCartEmpy";
import ShoppingCartFilled from "../tooltip/ShoppingCartFilled";

interface Props {
  onSubmit: (data: FieldValues) => void;
  isLogin: boolean;
  loggedInUser: LoggedUser;
  onLogout: () => void;
  carts: CartItem[];
}

function NavBar({ onSubmit, isLogin, loggedInUser, onLogout, carts }: Props) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  return (
    <StyledAppBar className="linearGradient">
      <FirstRowContainer disableGutters>
        <NavBarE1 />

        <NavBarE2
          loggedInUser={loggedInUser}
          isLogin={isLogin}
          onLogout={onLogout}
        />
      </FirstRowContainer>

      <SecondRowContainer disableGutters>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography variant="h4">
            <Stack direction="row">
              <SiShopee />
              Shopee
            </Stack>
          </Typography>
        </Link>

        <SearchForm
          onSubmit={handleSubmit((data) => {
            if (!isLogin) {
              navigate("/login");
            } else {
              onSubmit(data), reset();
            }
          })}
        >
          <Input
            disableUnderline
            {...register("search")}
            placeholder="Search"
            name="search"
            style={{ width: "100%" }}
          />
          <SearchButton disableRipple type="submit">
            <BiSearch size={20} style={{ color: "white" }} />
          </SearchButton>
        </SearchForm>

        <LightTooltip
          arrow
          title={
            carts.length !== 0 ? (
              <ShoppingCartFilled carts={carts} />
            ) : (
              <ShoppingCartEmpty />
            )
          }
          placement="bottom-start"
        >
          <Link to={isLogin ? "/shoppingcart" : "/login"}>
            {carts.length !== 0 && <TotalCartItemsChip label={carts.length} />}
            <CgShoppingCart
              style={{ paddingTop: "10px", fontSize: "2rem", color: "white" }}
            />
          </Link>
        </LightTooltip>
      </SecondRowContainer>
    </StyledAppBar>
  );
}

export default NavBar;
