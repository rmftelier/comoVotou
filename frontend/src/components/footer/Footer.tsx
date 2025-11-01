import { JSX } from "react";
import { Stack, StackProps, Text, Link } from "@chakra-ui/react";

const Footer: React.FC<StackProps> = ({
  p = '5',
  h = '20',
  ...rest
}): JSX.Element => {
  return (
    <Stack
      as="footer"
      mt="auto"
      alignItems="center"
      borderTopWidth="1px"
      p={p}
      h={h}
      bg="gray.100"
      {...rest}
    >
      <Text textStyle="sm"> ©2025 Como Votou? - Desenvolvido por <Link href="https://github.com/rmftelier">Roberta Meyrelles França</Link></Text>
      <Text textStyle="sm">Dados fornecidos pela API Dados Abertos da Câmara dos Deputados</Text>
    </Stack>
  )
};

export default Footer; 