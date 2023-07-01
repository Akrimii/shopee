import { List, ListItem, Typography } from "@mui/material";
import {
  BorderedContainer,
  FooterBottomGrayDiv,
  ListContainer,
  StyledLink,
  Title,
} from "./FooterBottomStyle";
import FooterBottomE1 from "./FooterBottomE1";
import FooterBottomE3 from "./FooterBottomE3";
import FooterBottomE2 from "./FooterBottomE2";
import { aboutShopee, aboutShopeeMap } from "../../assets/aboutShopee";
import {
  customerService,
  customerServiceMap,
} from "../../assets/customerService";
import FooterBottomE4 from "./FooterBottomE4";

function FooterBottom() {
  return (
    <FooterBottomGrayDiv>
      <BorderedContainer disableGutters>
        <ListContainer disableGutters>
          <Title>CUSTOMER SERVICE</Title>
          <List>
            {customerService.map((item, index) => (
              <ListItem key={index}>
                <StyledLink target="_blank" href={customerServiceMap[item]}>
                  <Typography sx={{ fontSize: "0.8rem" }}>{item}</Typography>
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </ListContainer>

        <ListContainer disableGutters>
          <Title>ABOUT SHOPEE</Title>
          <List>
            {aboutShopee.map((item, index) => (
              <ListItem key={index}>
                <StyledLink target="_blank" href={aboutShopeeMap[item]}>
                  <Typography sx={{ fontSize: "0.8rem" }}>{item}</Typography>
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </ListContainer>
        <FooterBottomE1 />
        <FooterBottomE4 />
        <FooterBottomE2 />
      </BorderedContainer>

      <FooterBottomE3 />
    </FooterBottomGrayDiv>
  );
}

export default FooterBottom;
