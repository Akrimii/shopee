import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Categories from "./components/categories/Categories";
import DailyDiscover from "./components/dailyDiscover/DailyDiscover";
import FooterTop from "./components/footerTop/FooterTop";
import NavBar from "./components/navBar/NavBar";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import SearchPage from "./components/searchPage/SearchPage";
import useProducts, { Product } from "./hooks/useProducts";
import ProductPage from "./components/productPage/ProductPage";
import { where } from "underscore";
import FooterBottom from "./components/footerBottom/FooterBottom";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import ShoppingCartE1 from "./components/shoppingCart/ShoppingCartE1";
import ShoppingCartE2, { row } from "./components/shoppingCart/ShoppingCartE2";
import CheckoutE1 from "./components/checkout/CheckoutE1";
import CheckoutE3 from "./components/checkout/CheckoutE3";
import ScrollToTop from "./components/scrolling/ScrollToTop";
import useCarts from "./hooks/useCarts";

export interface CartItem {
  p: Product;
  numOfItem: number;
}
export type LoggedUser = string;
function App() {
  const {
    carts,
    setCarts,
    onMinusShoppingCartItem,
    onAddShoppingCartItem,
    onDeleteCartItem,
  } = useCarts();
  const { products } = useProducts();
  const { state } = useLocation();
  const [searchProd, setSearchProd] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loggedInUser, setLoggedInUser] = useState<LoggedUser>("");
  const [openDialog, setOpenDialog] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState<(row | undefined)[]>([]);

  function onPlaceOrder(checkoutItems: (row | undefined)[]) {
    let temp: number[] = [];
    checkoutItems.map((checkoutItem) =>
      temp.push(checkoutItem?.product.product.id as number)
    );
    setCarts(carts.filter((cart) => !temp.includes(cart.p.id)));
  }

  function onSubmitToCheckout(item: (row | undefined)[]) {
    setCheckoutItems([...item]);
  }

  function onSubmit(data: FieldValues) {
    if (!isLogin) {
      navigate("/login");
    } else {
      let keywords = `${data.search}`.trim().split(" ");
      let pattern = `${keywords.filter((keyword) => keyword !== "").join("|")}`;
      let temp: Product[] = [];
      products.forEach((product) => {
        let regex = new RegExp(pattern, "gi");
        if (regex.test(Object.values(product).join(" "))) {
          console.log(product);
          temp.push(product);
        }
      });
      setSearchProd([...temp]);
      navigate("/search/:id");
    }
  }
  function onMinusQuantity() {
    quantity > 1 && setQuantity(quantity - 1);
  }
  function onAddQuantity() {
    quantity < state.stock && setQuantity(quantity + 1);
  }
  function onAddToCart() {
    setOpenDialog(true);
    where(carts, { p: state }).length > 0
      ? setCarts(
          carts.map((cart) =>
            cart.p === state
              ? { ...cart, numOfItem: cart.numOfItem + quantity }
              : cart
          )
        )
      : setCarts([...carts, { p: state, numOfItem: quantity }]);
  }
  function onSeeAll() {
    setSearchProd([...products]);
    navigate("/search/:id");
  }
  function onLogout() {
    setLogin(false);
    setLoggedInUser("");
    setCarts([]);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenDialog(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [openDialog]);

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar
                  onSubmit={(data) => onSubmit(data)}
                  isLogin={isLogin}
                  loggedInUser={loggedInUser}
                  onLogout={onLogout}
                  carts={carts}
                />
                <Outlet />
                <FooterBottom />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <Categories />
                  <DailyDiscover products={products} isLogin={isLogin} />
                  <FooterTop />
                </>
              }
            />
            <Route
              path="/search/:id"
              element={
                <>
                  <SearchPage products={searchProd} isLogin={isLogin} />
                </>
              }
            />
            <Route
              path="/search/category/:id"
              element={
                <>
                  <SearchPage
                    isLogin={isLogin}
                    products={[...where(products, { category: state })]}
                  />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <ProductPage
                    isLogin={isLogin}
                    product={state}
                    products={products}
                    onMinusQuantity={onMinusQuantity}
                    onAddQuantity={onAddQuantity}
                    quantity={quantity}
                    onAddToCart={onAddToCart}
                    onSeeAll={onSeeAll}
                    openDialog={openDialog}
                  />
                </>
              }
            />
          </Route>
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
                <FooterBottom />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login
                  onLoginPass={(data) => {
                    setLogin(!isLogin);
                    const users = localStorage.getItem("loginInfo");
                    const loginInfo = users !== null ? JSON.parse(users) : [];
                    setLoggedInUser(where(loginInfo, data)[0].userName);
                  }}
                />
                <FooterBottom />
              </>
            }
          />
          <Route
            path="/shoppingcart"
            element={
              <>
                <ShoppingCartE1
                  onLogout={onLogout}
                  onSubmit={(data) => onSubmit(data)}
                  loggedInUser={loggedInUser}
                  isLogin={isLogin}
                />
                <ShoppingCartE2
                  carts={carts}
                  onMinusQuantity={onMinusQuantity}
                  onAddQuantity={onAddQuantity}
                  isLogin={isLogin}
                  products={products.slice(0, 10)}
                  onSeeAll={onSeeAll}
                  onDeleteCartItem={onDeleteCartItem}
                  onMinusShoppingCartItem={onMinusShoppingCartItem}
                  onAddShoppingCartItem={onAddShoppingCartItem}
                  onSubmitToCheckout={onSubmitToCheckout}
                />
                <FooterBottom />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <CheckoutE1
                  onLogout={onLogout}
                  loggedInUser={loggedInUser}
                  isLogin={isLogin}
                />
                <CheckoutE3
                  checkoutItems={checkoutItems}
                  onPlaceOrder={onPlaceOrder}
                />
                <FooterBottom />
              </>
            }
          />
        </Routes>
      </ScrollToTop>
    </>
  );
}
export default App;
