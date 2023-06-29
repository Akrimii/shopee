import { payments } from "../../assets/payments";
import { logistics } from "../../assets/logistics";
import { ListContainer, Title } from "./FooterBottomStyle";
import { ImageList, ImageListItem } from "@mui/material";

function FooterBottomE1() {
  return (
    <ListContainer disableGutters>
      <Title>PAYMENT</Title>
      <ImageList cols={3} sx={{ width: "200px", paddingBottom: "5px" }}>
        {payments.map((payment, index) => (
          <ImageListItem key={index}>
            <img
              src={payment}
              style={{
                width: "60px",
                borderRadius: "2px",
                boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Title>LOGISTICS</Title>
      <ImageList cols={3} sx={{ width: "200px", paddingBottom: "5px" }}>
        {logistics.map((logistic, index) => (
          <ImageListItem key={index}>
            <img
              src={logistic}
              style={{
                width: "60px",
                borderRadius: "2px",
                boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </ListContainer>
  );
}

export default FooterBottomE1;
