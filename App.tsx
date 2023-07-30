import React from "react";
import {
  Text,
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";
import Header from "./components/Header"

export default function App() {
  return (
    <NativeBaseProvider>
      <Header/>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Text fontSize="50" bold>Money Maker</Text>
          <VStack space={2} alignItems="center">
            <Text fontSize="20">opens the way to your wealth...</Text>
          </VStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}