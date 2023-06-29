import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ListContainer, StyledLink, Title } from "./FooterBottomStyle";
import { List, ListItem, Stack, Typography } from "@mui/material";

const socials = {
  Facebook: "https://www.facebook.com/ShopeeMY",
  Instagram: "https://www.instagram.com/Shopee_MY/",
  LinkedIn: "https://www.linkedin.com/company/shopee/",
};

function FooterBottomE4() {
  return (
    <ListContainer disableGutters>
      <Title>FOLLOW US</Title>
      <List>
        <ListItem>
          <StyledLink target="_blank" href={socials["Facebook"]}>
            <Stack direction="row" spacing="10px">
              <BsFacebook style={{ fontSize: "1rem", color: "#4A4A4A" }} />
              <Typography sx={{ fontSize: "0.8rem" }}>Facebook</Typography>
            </Stack>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink target="_blank" href={socials["Instagram"]}>
            <Stack direction="row" spacing="10px">
              <RiInstagramFill style={{ fontSize: "1rem", color: "#4A4A4A" }} />
              <Typography sx={{ fontSize: "0.8rem" }}>Instagram</Typography>
            </Stack>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink target="_blank" href={socials["LinkedIn"]}>
            <Stack direction="row" spacing="10px">
              <BsLinkedin style={{ fontSize: "1rem", color: "#4A4A4A" }} />
              <Typography sx={{ fontSize: "0.8rem" }}>LinkedIn</Typography>
            </Stack>
          </StyledLink>
        </ListItem>
      </List>
    </ListContainer>
  );
}

export default FooterBottomE4;
