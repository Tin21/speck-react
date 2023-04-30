import {
  SearchBar as SearchBarWrapper,
  SearchBarLogo,
  SearchBarInput,
} from "./SearchBarStyle";
import React from "react";

const SearchBar = (props) => {
  return (
    <SearchBarWrapper>
      <SearchBarLogo />
      <SearchBarInput
        type="text"
        id="value"
        onChange={() => props.onChangeCall("value")}
      ></SearchBarInput>
    </SearchBarWrapper>
  );
};

export default SearchBar;
