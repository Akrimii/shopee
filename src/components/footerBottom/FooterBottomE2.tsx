import { ImageList, ImageListItem, Link } from "@mui/material";
import { downloads } from "../../assets/downloads";
import { ListContainer, Title } from "./FooterBottomStyle";

function FooterBottomE2() {
  return (
    <ListContainer>
      <Title>SHOPEE APP DOWNLOAD</Title>
      <ListContainer
        sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
        disableGutters
      >
        <Link href="https://shopee.com.my/web" target="_blank">
          <img
            src="https://down-my.img.susercontent.com/file/23b0f77697c03e41fde33a2a57e46d21"
            style={{
              width: "100px",
              borderRadius: "3px",
              boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
            }}
          />
        </Link>
        <ImageList cols={1} sx={{ width: "140px" }}>
          {downloads.map((download, index) => (
            <Link href="https://shopee.com.my/web" target="_blank" key={index}>
              <ImageListItem>
                <img
                  src={download}
                  style={{
                    width: "120px",
                    height: "max-content",
                    borderRadius: "2px",
                    boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.1)",
                  }}
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </ListContainer>
    </ListContainer>
  );
}

export default FooterBottomE2;
