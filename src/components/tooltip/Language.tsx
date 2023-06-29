import { ButtonGroup } from "@mui/material";
import { LanguageButton } from "./TooltipStyle";

function Language() {
  return (
    <ButtonGroup orientation="vertical" sx={{ width: "150px" }}>
      <LanguageButton disableRipple>English</LanguageButton>

      <LanguageButton disableRipple>Bahasa Melayu</LanguageButton>
    </ButtonGroup>
  );
}

export default Language;
