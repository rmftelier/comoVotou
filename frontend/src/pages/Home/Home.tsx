import { Box, Flex, Heading, Text, SimpleGrid, Spinner, Link, Button} from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useGetAllProposicoes } from "@/api/queries/proposicao";
import { useState } from "react";


const Home = () => {

  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 12;

  const { data, isLoading, isError, error, isFetching } = useGetAllProposicoes(pagina, itensPorPagina);

  const temProxima = data?.links?.some((l) => l.rel === "next");
  const temAnterior = pagina > 1;


  if (isLoading) {
    return (
      <>
        <Header />
        <Flex justify="center" align="center" h="70vh" direction="column">
          <Spinner size="xl" />
          <Text mt={3}>Carregando proposições...</Text>
        </Flex>
        <Footer />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header />
        <Box textAlign="center" py={10}>
          <Text color="red.500">
            Erro ao carregar proposições: {error?.message || "Erro desconhecido"}
          </Text>
        </Box>
        <Footer />
      </>
    );
  }


  return (
    <>
      <Header />
      <Box px={10} py={12} minH="100vh" bg="gray.50">
        <Box textAlign="center" mb={10}>
          <Heading size="2xl">Proposições Legislativas</Heading>
          <Text fontSize="lg" color="gray.600" mt={2}>
            Acompanhe o que está sendo discutido no Congresso Nacional
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          justifyItems="center"
          gap={5}
        >
          {data?.dados.map((prop) => (
            <Box
              key={prop.id}
              borderWidth="1px"
              borderRadius="md"
              bg="white"
              boxShadow="md"
              borderTop="4px solid"
              borderColor="green.600"
              p={5}
              w="100%"
              _hover={{ transform: "translateY(-4px)", transition: "0.2s" }}
            >
              <Text fontWeight="bold" fontSize="lg" color="green.700" mb={2}>
                {prop.siglaTipo} {prop.numero}/{prop.ano}
              </Text>
              <Text color="gray.700" mb={4}>
                {prop.ementa}
              </Text>
              <Link
                color="blue.600"
                fontWeight="semibold"
                fontSize="sm"
                display="inline-flex"
                alignItems="center"
                _hover={{ textDecoration: "underline" }}
              >
                Ver detalhes →
              </Link>
            </Box>
          ))}
        </SimpleGrid>

        {/* Paginação */}
        <Flex justify="center" align="center" mt={10} gap={4}>
          <Button
            onClick={() => setPagina((p) => Math.max(p - 1, 1))}
            disabled={!temAnterior || isFetching}
          >
            ← Anterior
          </Button>
          <Text fontWeight="medium">
            Página {pagina} {isFetching && "(carregando...)"}
          </Text>
          <Button
            onClick={() => setPagina((p) => p + 1)}
            disabled={!temProxima || isFetching}
          >
            Próxima →
          </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Home;