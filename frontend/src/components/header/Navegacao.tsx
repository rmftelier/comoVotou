import { JSX } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const Navegacao: React.FC<BoxProps> = ({
  children,
  p = '5',
  h = '20',
  ...rest
}): JSX.Element => {
  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      width="100%"
      borderBottomWidth="1px"
      p={p}
      h={h}
      bg="gray.100"
      {...rest}
    >
      {children}
    </Box>
  )
};

export default Navegacao; 