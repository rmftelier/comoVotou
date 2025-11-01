import React from "react";
import Navegacao from "./Navegacao";
import Area from "./Area";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import { BoxProps, Image, Heading, Button, HStack } from "@chakra-ui/react";
import { RiHomeLine, RiBookmarkLine } from "react-icons/ri";

const Header: React.FC<BoxProps> = (props) => {

  return (
    <Navegacao {...props}>
      <Area>
        <LeftHeader>
          <HStack gap={3}>
            <Image
              src="../../../public/logo.png"
              maxH="50px"
              maxW="50px"
            />
            <Heading>Como Votou?</Heading>
          </HStack>
        </LeftHeader>
        <RightHeader>
          <HStack gap={3}>
            <Button>
              <RiHomeLine /> Página Inicial
            </Button>
            <Button>
              <RiBookmarkLine /> Glossário
            </Button>
          </HStack>
        </RightHeader>
      </Area>
    </Navegacao>
  )
};

export default Header;