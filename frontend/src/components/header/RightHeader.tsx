import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IRightHeaderProps {
  children?: ReactNode;
}

const RightHeader: React.FC<IRightHeaderProps> = ({ children }) => (
  <Box
    height="100%"
    display="flex"
    alignItems="center"
    flexShrink={0}
    justifyContent="space-between"
  >
    {children}
  </Box>
);

export default RightHeader;