import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface IAreaProps {
  children?: ReactNode;
}

const Area: React.FC<IAreaProps> = ({ children }) => {
  return (
    <Box
      px={4}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      height={50}>
      {children}
    </Box>
  );
};

export default Area;