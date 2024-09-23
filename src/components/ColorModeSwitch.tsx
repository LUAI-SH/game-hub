import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
      <Text>Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
