import { Rating, Stack, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import useReviews from "../../hooks/useReviews";
import { random } from "underscore";
import { RiAccountCircleLine } from "react-icons/ri";
import {
  LightOrangeContainer,
  ReviewBox,
  WhiteContainer,
} from "./ProductPageStyle";
import { anonymousString } from "../../utilities/anonymousString";

interface Props {
  rating: number;
  totalRatings: number;
}

function ProductPageE5({ rating, totalRatings }: Props) {
  const { reviews } = useReviews();

  return (
    <WhiteContainer sx={{ paddingBottom: "100px" }}>
      <Typography>Product Ratings</Typography>
      <LightOrangeContainer>
        <Typography sx={{ fontSize: "2rem" }}>{rating.toFixed(1)}</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>out of 5</Typography>
        <Rating
          icon={<StarRoundedIcon style={{ fontSize: "2rem" }} />}
          emptyIcon={<StarRoundedIcon style={{ fontSize: "2rem" }} />}
          readOnly
          value={rating}
          precision={0.5}
          sx={{
            ".MuiRating-iconFilled": {
              color: "#EE4D2D",
            },
            ".MuiRating-iconEmpty": {
              color: "#F2F2F2",
            },
          }}
        />
      </LightOrangeContainer>
      {reviews.slice(0, totalRatings).map((review) => (
        <ReviewBox key={review.id}>
          <Stack direction="row">
            <RiAccountCircleLine
              style={{
                color: "rgba(0,0,0,0.1)",
                fontSize: "2.5rem",
              }}
            />
            <Stack direction="column">
              <Typography sx={{ fontSize: "0.8rem" }}>
                {anonymousString(review.email.split("@")[0])}
              </Typography>
              <Rating
                readOnly
                value={random(rating - 1, 5)}
                precision={0.5}
                size="small"
                sx={{ color: "#EE4D2D" }}
              />
              <Typography sx={{ paddingBottom: "20px", fontSize: "0.8rem" }}>
                {review.name}
              </Typography>
            </Stack>
          </Stack>
          <Typography sx={{ fontSize: "0.875rem" }}>{review.body}</Typography>
        </ReviewBox>
      ))}
    </WhiteContainer>
  );
}

export default ProductPageE5;
