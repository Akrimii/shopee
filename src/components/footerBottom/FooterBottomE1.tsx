import { payments } from "../../assets/payments";
import { logistics } from "../../assets/logistics";
import {
  Images,
  ListContainer,
  StyledImageList,
  Title,
} from "./FooterBottomStyle";
import { ImageList, ImageListItem } from "@mui/material";

function FooterBottomE1() {
  return (
    <ListContainer disableGutters>
      <Title>PAYMENT</Title>
      <StyledImageList cols={3}>
        {payments.map((payment, index) => (
          <ImageListItem key={index}>
            <Images src={payment} />
          </ImageListItem>
        ))}
      </StyledImageList>

      <Title>LOGISTICS</Title>
      <StyledImageList cols={3}>
        {logistics.map((logistic, index) => (
          <ImageListItem key={index}>
            <Images src={logistic} />
          </ImageListItem>
        ))}
      </StyledImageList>
    </ListContainer>
  );
}

export default FooterBottomE1;
