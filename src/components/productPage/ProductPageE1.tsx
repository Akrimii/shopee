import { ImageList, ImageListItem } from "@mui/material";
import { BigImage, BigPictureContainer, SmallImage } from "./ProductPageStyle";
import { Product } from "../../hooks/useProducts";
import { useState } from "react";

interface Props {
  product: Product;
}

function ProductPageE1({ product }: Props) {
  const [displayImage, setDisplayImage] = useState<string | null>(null);
  return (
    <>
      <BigPictureContainer disableGutters>
        <BigImage src={!displayImage ? product.thumbnail : displayImage} />
      </BigPictureContainer>
      <ImageList
        variant="standard"
        gap={0}
        rowHeight={90}
        sx={{
          width: "450px",
          padding: "10px 0",
          display: "flex",
          overflowX: "scroll",
        }}
      >
        {product.images.map((image) => (
          <ImageListItem
            key={image}
            onMouseEnter={() => setDisplayImage(image)}
            onMouseLeave={() => setDisplayImage(null)}
            sx={{
              border: "2px solid white",
              ":hover": {
                border: "2px solid #EE4D2D",
              },
            }}
          >
            <SmallImage src={image} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default ProductPageE1;
