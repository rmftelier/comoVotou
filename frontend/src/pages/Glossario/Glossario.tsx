import { useState } from "react";
import { useGetAllTermos } from "@/api/queries/glossario";
import {
  Box,
  Text,
  Input,
  Flex,
  Accordion,
  Link,
  VStack,
  Heading
} from "@chakra-ui/react";
import { PageState } from "@/components/PageState";

const Glossario = () => {
  const { data, isLoading, isError, error } = useGetAllTermos();
  const [search, setSearch] = useState("");

  const filteredData = data?.filter((termo) => {
    const query = search.toLowerCase();
    return (
      termo.termo.toLowerCase().includes(query) ||
      termo.sigla.toLowerCase().includes(query)
    );
  });

  return (
    <PageState
      isLoading={isLoading}
      isError={isError}
      errorMessage={error?.message}
      loadingMessage="Carregando termos..."
    >
      <Box textAlign="center">
        <Heading size="5xl" fontWeight="bold" mb={2}>
          Glossário Legislativo
        </Heading>
        <Text fontSize="2xl" color="gray.600" mb={6}>
          Entenda os Termos Técnicos do Processo Legislativo
        </Text>
      </Box>

      <Input
        placeholder="Buscar por termo ou sigla..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={8}
        size="lg"
        bg="gray.50"
        _focus={{ borderColor: "blue.400", bg: "white" }}
      />

      {filteredData?.length ? (
        <Accordion.Root multiple w="100%">
          <VStack align="stretch" w="100%">
            {filteredData.map((termo) => (
              <Accordion.Item
                key={termo.id}
                value={termo.id.toString()}
                borderWidth="1px"
                borderColor="gray.200"
                rounded="lg"
                bg="white"
                shadow="sm"
                _hover={{ bg: "gray.50" }}
                w="100%"
              >
                <Accordion.ItemTrigger px={5} py={4}>
                  <Flex align="center" gap={4} flex="1">
                    <Box
                      w="50px"
                      bg="green.500"
                      color="white"
                      fontWeight="bold"
                      fontSize="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="md"
                    >
                      {termo.sigla}
                    </Box>
                    <Text textStyle="xl" flex="1">
                      {termo.termo}
                    </Text>
                    <Accordion.ItemIndicator />
                  </Flex>
                </Accordion.ItemTrigger>

                <Accordion.ItemContent>
                  <Accordion.ItemBody px={5} pb={4}>
                    <Text textStyle="lg" color="black">
                      {termo.descricao}
                    </Text>
                    {termo.url && (
                      <Flex justifyContent="flex-end" mt={2}>
                        <Link
                          href={termo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="blue.500"
                          fontWeight="medium"
                          display="block"
                          mt={4}
                          _hover={{ textDecoration: "underline" }}
                        >
                          Ver mais
                        </Link>
                      </Flex>
                    )}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </VStack>
        </Accordion.Root>
      ) : (
        <Flex justify="center" align="center" flex="1">
          <Text textAlign="center" color="gray.500" fontSize="lg">
            Nenhum termo encontrado.
          </Text>
        </Flex>
      )}
    </PageState>
  );
};

export default Glossario;
