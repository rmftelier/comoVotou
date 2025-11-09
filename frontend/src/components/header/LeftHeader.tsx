import { Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ILeftHeaderProps {
  children?: ReactNode;
}

const LeftHeader: React.FC<ILeftHeaderProps> = ({ children }) => (
  <Stack
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    gap={0}
    direction="row"
    flexShrink={0}
  >
    {children}
  </Stack>
);

export default LeftHeader;