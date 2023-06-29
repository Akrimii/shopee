import { Container, Grid, Rating, Stack, Typography } from "@mui/material";
import DailyDiscoverE2 from "../dailyDiscover/DailyDiscoverE2";
import { FiFilter } from "react-icons/fi";
import {
  ProductCardGrid,
  SideBarSubTitle,
  SideBarBox,
  RatingButton,
  StyledDiv,
} from "./SearchPageStyle";
import StarIcon from "@mui/icons-material/Star";
import { Product } from "../../hooks/useProducts";
import SearchPageE2 from "./SearchPageE2";

interface Props {
  products: Product[];
  isLogin: boolean;
}

const rateValues = [4, 3, 2, 1];

function SearchPage({ products, isLogin }: Props) {
  if (products.length === 0) {
    return <SearchPageE2 />;
  }
  return (
    <Container disableGutters sx={{ minWidth: "1200px" }}>
      <Grid container spacing="20px" sx={{ minWidth: "1200px" }}>
        <Grid item xs={2}>
          <SideBarBox>
            <Stack direction="row">
              <FiFilter />
              <Typography sx={{ fontWeight: "bolder" }}>
                Search Filter
              </Typography>
            </Stack>

            <StyledDiv>
              <SideBarSubTitle>Price Range</SideBarSubTitle>
            </StyledDiv>

            <StyledDiv>
              <SideBarSubTitle>Rating</SideBarSubTitle>
              <RatingButton>
                <Rating
                  value={5}
                  readOnly
                  size="small"
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
                  }
                />
              </RatingButton>
              {rateValues.map((rateValue) => (
                <RatingButton key={rateValue}>
                  <Rating
                    value={rateValue}
                    readOnly
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
                    }
                  />
                  &Up
                </RatingButton>
              ))}
            </StyledDiv>

            <StyledDiv>
              <SideBarSubTitle>Brand</SideBarSubTitle>
            </StyledDiv>
          </SideBarBox>
        </Grid>
        <Grid item xs={10}>
          <ProductCardGrid>
            <DailyDiscoverE2 isLogin={isLogin} products={products} />
          </ProductCardGrid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchPage;
