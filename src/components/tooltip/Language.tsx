import { ButtonGroup } from "@mui/material";
import { LanguageButton } from "./TooltipStyle";

function Language() {
  return (
    <ButtonGroup orientation="vertical" sx={{ width: "150px" }}>
      <LanguageButton disableRipple>English</LanguageButton>

      <LanguageButton disableRipple>Bahasa Melayu</LanguageButton>
    </ButtonGroup>

    /*<LightTooltip arrow title={<Language />}>
    <StyledButton
    disableRipple
    variant="text"
    startIcon={<FiGlobe size="1rem" />}
    endIcon={<BsChevronDown size="0.8rem" />}
  >
    English
  </StyledButton>
</LightTooltip>*/
  );
}

export default Language;
