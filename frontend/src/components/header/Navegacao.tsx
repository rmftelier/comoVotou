import { JSX } from "react";
import { Container, BoxProps } from "@chakra-ui/react";

const Navegacao: React.FC<BoxProps> = ({
  children,
  p = '5',
  h = '25',
  ...rest
}): JSX.Element => {
  return (
    <Container
      as="nav"
      position="sticky"
      top="0"
      width="100%"
      borderBottomWidth="1px"
      p={p}
      h={h}
      maxW="100%"
      bg="gray.100"
      {...rest}
    >
      {children}
    </Container>
  )
};

export default Navegacao; 