import { Box, Heading } from '@chakra-ui/react'
import Home from "@/pages/Home/Home.tsx";

function App() {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="100vw"
      h="100vh"
      bg="white"
    >
      <Box >
        <Heading>Como Votou?</Heading>
        <Home />
      </Box>
    </Box >
  )
}

export default App;
