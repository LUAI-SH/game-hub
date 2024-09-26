import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//     selectedSort: Platform | null;
//     onSelectedSort: (platform: Platform) => void;
//   }

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order BGy
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>
            {platform.slug}
          </MenuItem>
        ))} */}
        <MenuItem>dfdsv</MenuItem>
      </MenuList>
    </Menu>
  );
}
