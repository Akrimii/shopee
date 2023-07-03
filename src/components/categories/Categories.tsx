import { CardContent } from "@mui/material";
import useCategories from "../../hooks/useCategories";
import { images } from "../../assets/categories";
import {
  CategoriesContainer,
  CategoryHeader,
  CategoryCard,
  CategoryCardMedia,
  CategoryCardName,
  Div,
} from "./CategoriesStyle";
import { Link } from "react-router-dom";

function Categories() {
  const { categories } = useCategories();

  return (
    <Div>
      <CategoriesContainer>
        <CategoryHeader variant="subtitle1" sx={{ color: "#EE4D2D" }}>
          CATEGORIES
        </CategoryHeader>
        {categories.slice(0, 18).map((category: string, index: number) => (
          <Link
            to="/search/category/:id"
            key={index}
            state={category}
            style={{ textDecoration: "none" }}
          >
            <CategoryCard>
              <CategoryCardMedia image={images[category]} />
              <CardContent>
                <CategoryCardName>{category}</CategoryCardName>
              </CardContent>
            </CategoryCard>
          </Link>
        ))}
      </CategoriesContainer>
    </Div>
  );
}

export default Categories;
