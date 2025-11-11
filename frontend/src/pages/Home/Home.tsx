import { Box, Flex, Heading, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { useGetAllProposicoes } from "@/api/queries/proposicao";
import { useState } from "react";
import { Link } from "react-router";
import { PageState } from "@/components/PageState";

const Home = () => {

  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 12;

  const { data, isLoading, isError, error, isFetching } = useGetAllProposicoes(pagina, itensPorPagina);

  const temProxima = data?.links?.some((l) => l.rel === "next");
  const temAnterior = pagina > 1;

  return (
    <PageState
      isLoading={isLoading}
      isError={isError}
      errorMessage={error?.message}
      loadingMessage="Carregando proposições..."
      minHeight="100vh"
    >
      <Box textAlign="center" mb={10}>
        <Heading size="5xl" fontWeight="bold">Proposições Legislativas</Heading>
        <Text fontSize="2xl" color="gray.600" mt={2}>
          Acompanhe o que está sendo discutido no Congresso Nacional
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        justifyItems="center"
        gap={5}
        minH="60vh"
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
            p={6}
            minH="280px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            _hover={{ transform: "translateY(-4px)", transition: "0.2s" }}
            w="100%"
          >
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="green.700" mb={2}>
                {prop.siglaTipo} {prop.numero}/{prop.ano}
              </Text>
              <Text color="gray.700">
                {prop.ementa}
              </Text>
            </Box>

            <Flex justify="flex-end" mt={6}>
              <Link
                to={`/proposicoes/${prop.id}`}
                style={{
                  color: "#166534",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Ver detalhes →
              </Link>
            </Flex>
          </Box>
        )
        )}
      </SimpleGrid>

      <Flex justify="center" align="center" mt={10} gap={4} >
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

    </PageState>
  );
};

export default Home;