import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement color='white' children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search games...." />
    </InputGroup>
  );
}
