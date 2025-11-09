import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Link,
  VStack,
  Flex,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { useGetProposicaoById } from "../../api/queries/proposicao";
import {
  useGetVotacoesByProposicao,
  useGetVotosByVotacao,
} from "../../api/queries/votacao";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Proposicao = () => {
  const { id } = useParams<{ id: string }>();
  const proposicaoId = Number(id);

  const {
    data: proposicaoData,
    isLoading,
    isError,
  } = useGetProposicaoById(proposicaoId);
  const {
    data: votacoesData,
    isLoading: votacoesLoading,
  } = useGetVotacoesByProposicao(id!);

  const [votacaoAberta, setVotacaoAberta] = useState<number | null>(null);

  // Hook para buscar os votos da votação atualmente aberta
  const { data: votosData, isLoading: votosLoading } = useGetVotosByVotacao(
    votacaoAberta ? String(votacaoAberta) : ""
  );

  if (isLoading)
    return (
      <>
        <Header />
        <Box p={6} textAlign="center">
          <Spinner size="xl" />
          <Text mt={3}>Carregando proposição...</Text>
        </Box>
        <Footer />
      </>
    );

  if (isError)
    return (
      <>
        <Header />
        <Box p={6} textAlign="center">
          <Text color="red.500">Erro ao carregar proposição.</Text>
        </Box>
        <Footer />
      </>
    );

  const prop = proposicaoData?.dados;

  return (
    <>
      <Header />
      <Box maxW="800px" mx="auto" p={6}>
        {/* DADOS PRINCIPAIS DA PROPOSIÇÃO */}
        <Flex justify="space-between" align="center" mb={6}>
          <Heading size="lg">
            {prop?.siglaTipo} {prop?.numero}/{prop?.ano}
          </Heading>
        </Flex>

        <Text fontSize="md" color="gray.600" mb={4}>
          {prop?.descricaoTipo}
        </Text>

        <VStack align="start">
          <Text>{prop?.ementaDetalhada || prop?.ementa}</Text>
          {prop?.statusProposicao && (
            <Box>
              <Text fontWeight="bold">Situação:</Text>
              <Text color="gray.700">
                {prop.statusProposicao.descricaoSituacao}
              </Text>
              <Text mt={2} color="gray.600">
                {prop.statusProposicao.descricaoTramitacao}
              </Text>
            </Box>
          )}
        </VStack>

        {prop?.texto && (
          <Link href={prop.texto} color="blue.500" mt={4} display="block">
            Ver texto completo
          </Link>
        )}

        {/* LISTA DE VOTAÇÕES */}
        <Heading size="md" mb={4} mt={8}>
          Votações
        </Heading>

        {votacoesLoading ? (
          <Spinner />
        ) : (
          <VStack align="stretch">
            {votacoesData?.dados?.length ? (
              votacoesData.dados.map((votacao) => (
                <Box key={votacao.id} borderWidth="1px" borderRadius="xl">
                  <CardBody>
                    <VStack align="start">
                      <Heading size="sm">{votacao.descricao}</Heading>
                      <Text fontSize="sm">🗓️ {votacao.data}</Text>
                      <Text fontSize="sm">
                        Resultado:{" "}
                        <strong
                          style={{
                            color: votacao.aprovacao ? "green" : "red",
                          }}
                        >
                          {votacao.aprovacao ? "Aprovada" : "Rejeitada"}
                        </strong>
                      </Text>

                      <Button
                        colorScheme="blue"
                        size="sm"
                        alignSelf="flex-end"
                        onClick={() =>
                          setVotacaoAberta(
                            votacaoAberta === votacao.id ? null : votacao.id
                          )
                        }
                      >
                        {votacaoAberta === votacao.id
                          ? "Ocultar votos"
                          : "Ver votos"}
                      </Button>

                      {/* LISTA DE VOTOS */}
                      {votacaoAberta === votacao.id && (
                        <Box mt={3} w="100%">
                          {votosLoading ? (
                            <Spinner />
                          ) : (
                            <VStack align="start">
                              {votosData?.dados?.map((voto) => (
                                <Text key={voto.deputado_.id}>
                                  {voto.deputado_.nome} — {voto.tipoVoto}
                                </Text>
                              ))}
                            </VStack>
                          )}
                        </Box>
                      )}
                    </VStack>
                  </CardBody>
                </Box>
              ))
            ) : (
              <Text>Nenhuma votação encontrada.</Text>
            )}
          </VStack>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Proposicao;
