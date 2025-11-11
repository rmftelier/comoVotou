import { useState } from "react";
import { useParams } from "react-router";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Flex,
  SimpleGrid,
  Button,
  Spinner,
  Card,
} from "@chakra-ui/react";
import { useGetProposicaoById } from "../../api/queries/proposicao";
import {
  useGetVotacoesByProposicao,
  useGetVotosByVotacao,
} from "../../api/queries/votacao";
import { PageState } from "../../components/PageState"; // ajuste o path se necessário

const Proposicao = () => {
  const { id } = useParams<{ id: string }>();
  const proposicaoId = Number(id);

  const {
    data: proposicaoData,
    isLoading,
    isError,
    error,
  } = useGetProposicaoById(proposicaoId);

  const {
    data: votacoesData,
    isLoading: votacoesLoading,
  } = useGetVotacoesByProposicao(id!);

  const [votacaoAberta, setVotacaoAberta] = useState<number | null>(null);
  const { data: votosData, isLoading: votosLoading } = useGetVotosByVotacao(
    votacaoAberta ? String(votacaoAberta) : ""
  );

  const prop = proposicaoData?.dados;

  return (
    <PageState
      isLoading={isLoading}
      isError={isError}
      errorMessage={error?.message}
      loadingMessage="Carregando proposição..."
    >
      <Box maxW="1000px" mx="auto">
        <Link href="/" color="blue.500" mb={4} display="inline-block">
          ← Voltar para a lista
        </Link>

        <Card.Root mb={6} shadow="sm" borderRadius="xl">
          <Card.Body>
            <Heading size="xl" mb={1}>
              {prop?.siglaTipo} {prop?.numero}/{prop?.ano}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              {prop?.ementaDetalhada || prop?.ementa}
            </Text>
          </Card.Body>
        </Card.Root>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={6}>
          <InfoCard label="Data de Apresentação" value={prop?.dataApresentacao} />
          <InfoCard label="Tipo" value={prop?.descricaoTipo} />
          <InfoCard
            label="Situação"
            value={prop?.statusProposicao?.descricaoSituacao}
          />
          <InfoCard
            label="Tramitação"
            value={prop?.statusProposicao?.descricaoTramitacao}
          />
          <InfoCard label="Regime" value={prop?.statusProposicao?.regime} />
        </SimpleGrid>

        <Box mb={8}>
          <Heading size="2xl" mb={3}>
            Último Despacho
          </Heading>
          <Card.Root shadow="xs">
            <Card.Body>
              <Text>
                {prop?.statusProposicao?.despacho ||
                  "Nenhum despacho disponível."}
              </Text>
            </Card.Body>
          </Card.Root>
        </Box>

        
        <Box>
          <Heading size="2xl" mb={3}>
            Votações
          </Heading>

          {votacoesLoading ? (
            <Spinner />
          ) : votacoesData?.dados?.length ? (
            <VStack align="stretch">
              {votacoesData.dados.map((votacao) => (
                <Card.Root key={votacao.id} shadow="xs">
                  <Card.Body>
                    <Flex
                      justify="space-between"
                      align={{ base: "start", md: "center" }}
                      direction={{ base: "column", md: "row" }}
                      gap={2}
                    >
                      <Box>
                        <Heading size="sm" mb={1}>
                          {votacao.descricao}
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          🗓️ {votacao.data}
                        </Text>
                        <Text fontSize="sm" mt={1}>
                          Resultado:{" "}
                          <Text
                            as="span"
                            fontWeight="bold"
                            color={votacao.aprovacao ? "green.500" : "red.500"}
                          >
                            {votacao.aprovacao ? "Aprovada" : "Rejeitada"}
                          </Text>
                        </Text>
                      </Box>

                      <Button
                        size="sm"
                        colorScheme="blue"
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
                    </Flex>

                    {votacaoAberta === votacao.id && (
                      <Box mt={3}>
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
                  </Card.Body>
                </Card.Root>
              ))}
            </VStack>
          ) : (
            <Text>Nenhuma votação encontrada.</Text>
          )}
        </Box>
      </Box>
    </PageState>
  );
};

const InfoCard = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => (
  <Card.Root shadow="xs">
    <Card.Body>
      <Text fontSize="lg"fontWeight="semibold" color="gray.600">
        {label}
      </Text>
      <Text>{value || "—"}</Text>
    </Card.Body>
  </Card.Root>
);

export default Proposicao;
