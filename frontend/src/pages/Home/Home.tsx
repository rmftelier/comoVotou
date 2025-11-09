import { Stack, Heading } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="50px"
      >
        <Heading size="3xl">Proposições Legislativas</Heading>
        <Heading size="md">Acompanhe o que está sendo discutido no Congresso Nacional.</Heading>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;