import { ImageList, ImageListItem, Link } from "@mui/material";
import { downloads } from "../../assets/downloads";
import {
  DownloadImages,
  ListContainer,
  QRCodeImage,
  Title,
} from "./FooterBottomStyle";

function FooterBottomE2() {
  return (
    <ListContainer>
      <Title>SHOPEE APP DOWNLOAD</Title>
      <ListContainer
        sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
        disableGutters
      >
        <Link href="https://shopee.com.my/web" target="_blank">
          <QRCodeImage src="https://down-my.img.susercontent.com/file/23b0f77697c03e41fde33a2a57e46d21" />
        </Link>
        <ImageList cols={1} sx={{ width: "140px" }}>
          {downloads.map((download, index) => (
            <Link href="https://shopee.com.my/web" target="_blank" key={index}>
              <ImageListItem>
                <DownloadImages src={download} />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </ListContainer>
    </ListContainer>
  );
}

export default FooterBottomE2;
