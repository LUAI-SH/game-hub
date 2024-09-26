import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    selectedSortOrder: string;
    onSelectedSortOrder: (sortOrder: string) => void;
  }

export default function SortSelector({ selectedSortOrder,  onSelectedSortOrder}:Props) {
  const sortOrder = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];
  
  const currentSortOrder = sortOrder.find(order => order.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Listed By: {currentSortOrder?.label || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => onSelectedSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
