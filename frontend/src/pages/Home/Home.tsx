import { Stack, Heading} from "@chakra-ui/react";


const Home = () => {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="50px"
    >
      <Heading size="3xl">Proposições Legislativas</Heading>
      <Heading size="md">Acompanhe o que está sendo discutido no Congresso Nacional.</Heading>
    </Stack>
  );
};

export default Home;