import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
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
import { useEffect, useState } from "react";

interface Props {
  products: Product[];
  isLogin: boolean;
}

const rateValues = [5, 4, 3, 2, 1];

function SearchPage({ products, isLogin }: Props) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  let brands: string[] = [];
  products.map((product) => brands.push(product.brand));

  if (products.length === 0) {
    return <SearchPageE2 />;
  }

  function onClearAll() {
    setSelectedBrands([]), setSelectedRating(0);
  }

  useEffect(() => {
    if (selectedRating) {
      setFilteredProducts(
        products.filter((product) => product.rating >= selectedRating)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedRating]);

  useEffect(() => {
    if (selectedBrands.length > 0) {
      setFilteredProducts(
        products.filter((product) => selectedBrands.includes(product.brand))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedBrands]);

  function onSelectRating(value: number) {
    setSelectedRating(value);
  }

  function onSelectBrand(brand: string) {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
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
              <SideBarSubTitle>Rating</SideBarSubTitle>
              {rateValues.map((rateValue) => (
                <RatingButton
                  key={rateValue}
                  onClick={() => onSelectRating(rateValue)}
                  sx={
                    rateValue === selectedRating
                      ? {
                          backgroundColor: "rgba(0,0,0,0.1)",
                        }
                      : { backgroundColor: "transparent" }
                  }
                >
                  <Rating
                    sx={{ padding: "5px" }}
                    value={rateValue}
                    readOnly
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
                    }
                  />
                  {rateValue < 5 && "&Up"}
                </RatingButton>
              ))}
            </StyledDiv>

            <StyledDiv>
              <SideBarSubTitle>Brand</SideBarSubTitle>
              {brands.map((brand, index) => (
                <FormControlLabel
                  sx={{
                    color: "#757575",
                    ".MuiTypography-root": { fontSize: "0.8rem" },
                  }}
                  onChange={() => onSelectBrand(brand)}
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedBrands.includes(brand) ? true : false}
                      sx={{
                        color: "#757575",
                        "&.Mui-checked": {
                          color: "#ee4d2d",
                        },
                      }}
                      name={brand}
                      size="small"
                    />
                  }
                  label={brand}
                />
              ))}
            </StyledDiv>
            <StyledDiv sx={{ border: "none" }}>
              <Button
                onClick={onClearAll}
                disableRipple
                variant="contained"
                sx={{
                  backgroundColor: "#ee4d2d",
                  width: "100%",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#ee4d2d",
                    opacity: "0.8",
                  },
                }}
              >
                Clear All
              </Button>
            </StyledDiv>
          </SideBarBox>
        </Grid>
        <Grid item xs={10}>
          <ProductCardGrid>
            <DailyDiscoverE2 isLogin={isLogin} products={filteredProducts} />
          </ProductCardGrid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchPage;
