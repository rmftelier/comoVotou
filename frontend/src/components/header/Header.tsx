import React from "react";
import Navegacao from "./Navegacao";
import Area from "./Area";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import { BoxProps, Image, Heading, HStack, Button } from "@chakra-ui/react";
import { RiBookmarkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header: React.FC<BoxProps> = (props) => {
  return (
    <Navegacao {...props}>
      <Area>
        <LeftHeader>
          <HStack gap={3}>
            <Image
              src="/logo.png"
              maxH="50px"
              maxW="50px"
            />
            <Heading><Link to="/">Como Votou?</Link></Heading>
          </HStack>
        </LeftHeader>
        <RightHeader>
          <HStack gap={3}>
            <Button>
              <RiBookmarkLine /> <Link to="/glossario">Glossário</Link>
            </Button>
          </HStack>
        </RightHeader>
      </Area>
    </Navegacao>
  );
};

export default Header;