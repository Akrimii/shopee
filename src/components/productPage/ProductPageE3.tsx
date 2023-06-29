import {
  Typography,
  Paper,
  TableContainer,
  TableBody,
  TableCell,
} from "@mui/material";
import { Product } from "../../hooks/useProducts";
import { GrayBox, TableRowNoBorder, WhiteContainer } from "./ProductPageStyle";

interface Props {
  product: Product;
}

function ProductPageE3({ product }: Props) {
  const categoryData = `Shopee > ${product.category}`;
  return (
    <WhiteContainer>
      <GrayBox sx={{ padding: "10px", height: "30px", width: "98%" }}>
        <Typography>Product Specification</Typography>
      </GrayBox>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <TableBody>
          <TableRowNoBorder>
            <TableCell>Category</TableCell>
            <TableCell>{categoryData}</TableCell>
          </TableRowNoBorder>

          <TableRowNoBorder>
            <TableCell>Brand</TableCell>
            <TableCell>{product.brand}</TableCell>
          </TableRowNoBorder>

          <TableRowNoBorder>
            <TableCell>Country of Origin</TableCell>
            <TableCell>United States of America</TableCell>
          </TableRowNoBorder>

          <TableRowNoBorder>
            <TableCell>Stock</TableCell>
            <TableCell>{product.stock}</TableCell>
          </TableRowNoBorder>

          <TableRowNoBorder>
            <TableCell>Ships From</TableCell>
            <TableCell>Kuala Lumpur</TableCell>
          </TableRowNoBorder>
        </TableBody>
      </TableContainer>

      <GrayBox sx={{ padding: "10px", height: "30px", width: "98%" }}>
        <Typography>Product Description</Typography>
      </GrayBox>
      <Typography
        sx={{
          fontSize: "0.875rem",
          color: "rgba(0, 0, 0, 0.87)",
          padding: "15px 15px 0 15px",
        }}
      >
        {product.description}
      </Typography>
    </WhiteContainer>
  );
}

export default ProductPageE3;
