import React from "react"
import { Box } from "../Styled/Box"
import { Input } from "../Styled/Input"
import { TInputChange } from "../types/type"

interface ISBProps {
  searchTerm: string
  handleChange: TInputChange
}

const SearchBar: React.FC<ISBProps> = ({ searchTerm, handleChange }) => {
  return (
    <Box position="sticky">
      <Input
        placeholder="Search by name, email, skill or company"
        onChange={handleChange}
        value={searchTerm}
        borderBottom
      />
    </Box>
  )
}

export default SearchBar
