
import { useGetAllTermos } from "@/api/queries/glossario";
import { Box, Text, Spinner, VStack } from "@chakra-ui/react";


const Glossario = () => {

  const { data, isLoading, isError, error } = useGetAllTermos();

  console.log(data);


  if (isLoading) {
    return (

      <>
        <Box p={4} textAlign="center">
          <Spinner size="xl" />
          <Text mt={2}>Carregando termos...</Text>
        </Box>
      </>

    )
  }

  if (isError) {
    return (
      <>

        <Box p={4} textAlign="center">
          <Text color="red.500">
            Ocorreu um erro: {error?.message || "Erro ao carregar os dados."}
          </Text>
        </Box>

      </>
    );
  }

  return (
    <>
      <Box p={6}>
        <Text fontSize="2xl" mb={4} fontWeight="bold">
          Glossário
        </Text>
        <VStack align="start">
          {data?.map((termo) => (
            <Box key={termo.id} borderWidth="1px" p={4} rounded="md" w="100%">
              <Text fontWeight="bold">{termo.sigla} - {termo.termo} </Text>
              <Text fontSize="sm" color="gray.600">
                {termo.descricao}
              </Text>
              {termo.url && (
                <Text
                  as="a"
                >
                  Ver mais
                </Text>
              )}
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default Glossario;