import { Box, Spinner, Text } from "@chakra-ui/react";

interface PageStateProps {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  children?: React.ReactNode;
}

export const PageState = ({
  isLoading,
  isError,
  errorMessage,
  children,
}: PageStateProps) => {
  return (
    <Box
      minH="calc(100vh - 160px)"
      display="flex"
      flexDirection="column"
      justifyContent={
        isLoading || isError ? "center" : "flex-start"
      }
      alignItems={isLoading || isError ? "center" : "stretch"}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={10}
    >
      {isLoading ? (
        <>
          <Spinner size="xl" />
          <Text mt={2}>Carregando termos...</Text>
        </>
      ) : isError ? (
        <Text color="red.500" fontSize="lg" textAlign="center">
          Ocorreu um erro: {errorMessage || "Erro ao carregar os dados."}
        </Text>
      ) : (
        children
      )}
    </Box>
  );
};
