import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import FooterTopE1 from "./FooterTopE1";
import { StyledContainer, Title } from "./FooterTopStyles";
import { WhiteBox } from "./FooterTopStyles";
import { Breadcrumbs, Button } from "@mui/material";

function FooterTop() {
  const { categories } = useCategories();
  return (
    <WhiteBox>
      <FooterTopE1 />
      <StyledContainer
        disableGutters
        sx={{ borderBottom: "none", paddingBottom: "50px" }}
      >
        <Title>Categories</Title>
        <Breadcrumbs separator="|" maxItems={100}>
          {categories.map((category) => (
            <Link
              to="/search/category/:id"
              state={category}
              key={category}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "#757575",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  fontWeight: "bolder",
                  padding: 0,
                  ":hover": {
                    color: "#ee4d2d",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {category}
              </Button>
            </Link>
          ))}
        </Breadcrumbs>
      </StyledContainer>
    </WhiteBox>
  );
}

export default FooterTop;
