import React from "react";
import {
  Text,
  HStack,
  StatusBar,
  Switch,
  useColorMode,
  extendTheme,
  MoonIcon,
  SunIcon
} from "native-base";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <HStack
        _light={{ bg: "lightBlue.300" }}
        _dark={{ bg: "darkBlue.400" }}
        px="5"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="12"
      >
        <HStack alignItems="center">
          <Text fontSize="20" fontWeight="bold">
            Money Maker
          </Text>
        </HStack>
        <HStack>
          <ToggleDarkMode />
        </HStack>
      </HStack>
    </>
  );
}
// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  let textColor = "white";
  if (colorMode == "light") {
    textColor = "black"
  }
  return (
    <HStack space={2} alignItems="center">

        <MoonIcon color={textColor}></MoonIcon>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />

      
        <SunIcon color={textColor}></SunIcon>
    </HStack>
  );
}
