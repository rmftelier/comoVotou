import { Text, type TextProps, Stack } from '@chakra-ui/react'

export const Copyright = (props: TextProps) => {
  return (
    <Stack alignItems="center">
      <Text fontSize="sm" color="fg.muted" {...props}>
        &copy; {new Date().getFullYear()} Como Votou? - Desenvolvido por Roberta Meyrelles França
      </Text>
      <Text fontSize="sm" color="fg.muted">
        Dados fornecidos pela API Dados Abertos da Câmara dos Deputados
      </Text>
    </Stack>
  );
};



