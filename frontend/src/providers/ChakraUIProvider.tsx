"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

export const ChakraUIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  );
}; 

export default ChakraUIProvider;
