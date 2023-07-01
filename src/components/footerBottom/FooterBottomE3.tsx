import { Typography, Breadcrumbs } from "@mui/material";
import { countries } from "../../assets/countries";
import { BorderedContainer, CountriesContainer } from "./FooterBottomStyle";

function FooterBottomE3() {
  return (
    <BorderedContainer disableGutters>
      <Typography sx={{ fontSize: "0.8rem", color: "#757575" }}>
        © 2023 Shopee. All Rights Reserved.
      </Typography>
      <CountriesContainer disableGutters>
        <Typography sx={{ fontSize: "0.8rem", color: "#757575" }}>
          Country & Region:
        </Typography>
        <Breadcrumbs separator="|" maxItems={100}>
          {countries.map((country, index) => (
            <Typography
              key={index}
              sx={{ fontSize: "0.8rem", color: "#757575" }}
            >
              {country}
            </Typography>
          ))}
        </Breadcrumbs>
      </CountriesContainer>
    </BorderedContainer>
  );
}

export default FooterBottomE3;
