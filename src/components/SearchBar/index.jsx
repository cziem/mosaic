import React from "react";
import { Box } from "../Styled/Box";
import { Input } from "../Styled/Input";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };
  return (
    <Box position="sticky">
      <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
        borderBottom
      />
    </Box>
  );
};

export default SearchBar;
