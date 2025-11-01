import { Box} from '@chakra-ui/react'
import Home from "@/pages/Home/Home.tsx";
import Header from "@/components/header/Header.tsx";
import Footer from './components/footer/Footer';

function App() {

  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
    >
      <Header />
      <Box flex="1">
        <Home />
      </Box>
      <Footer />
    </Box>
  )
}

export default App;
