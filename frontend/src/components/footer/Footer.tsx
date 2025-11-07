import { Container, HStack, Icon, Link, Stack } from '@chakra-ui/react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Copyright } from "./copyright.tsx";

const Footer = () => (
  <Container
    as="footer"
    py={{ base: '5', md: '12' }}
    bg="gray.100"
    maxWidth="100%"
    borderTopWidth="1px"
  >
    <Stack gap="6" alignItems="center">
      <Copyright />
      <Stack direction="row" justify="space-between" align="center">
        <HStack gap="4">
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href} colorPalette="gray">
              <Icon size="md">{icon}</Icon>
            </Link>
          ))}
        </HStack>
      </Stack>
    </Stack>
  </Container>
);

const socialLinks = [
  { href: 'https://github.com/rmftelier', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com/in/roberta-meyrelles/', icon: <SiLinkedin /> },
];

export default Footer; 