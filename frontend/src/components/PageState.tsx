import { Box, Spinner, Text, Flex } from "@chakra-ui/react";

interface PageStateProps {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  loadingMessage?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export const PageState = ({
  isLoading,
  isError,
  errorMessage,
  loadingMessage = "Carregando dados...",
  minHeight = "calc(100vh - 160px)",
  children,
}: PageStateProps) => {
  return (
    <Box
      minH={minHeight}
      display="flex"
      flexDirection="column"
      justifyContent={isLoading || isError ? "center" : "flex-start"}
      alignItems={isLoading || isError ? "center" : "stretch"}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={10}
    >
      {isLoading ? (
        <Flex direction="column" align="center" justify="center">
          <Spinner size="xl" />
          <Text mt={2}>{loadingMessage}</Text>
        </Flex>
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
