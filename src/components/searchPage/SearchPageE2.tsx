import { Typography } from "@mui/material";
import { AiOutlineFileSearch } from "react-icons/ai";
import { NoResultsContainer } from "./SearchPageStyle";

function SearchPageE2() {
  return (
    <>
      <NoResultsContainer>
        <AiOutlineFileSearch size={80} style={{ color: "#757575" }} />
        <Typography>No results found</Typography>
        <Typography sx={{ color: "#757575" }}>
          Try different or more general keywords
        </Typography>
      </NoResultsContainer>
    </>
  );
}

export default SearchPageE2;
