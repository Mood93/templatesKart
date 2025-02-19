import * as React from 'react';
import {
  Container,
  chakra,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
  Box,
  Image
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Container p={{ base: 8, sm: 14 }}>
      <Stack direction="column" spacing={6} alignItems="center">
        <Box py={2} px={3} bg="teal" w="max-content" color="white" rounded="md" fontSize="sm">
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Text fontWeight="bold">Ready, Set, Build! 🚀</Text>
            <Text>Join the Hackathon!</Text>
          </Stack>
        </Box>
        <Heading
          as="h1"
          fontSize={{ base: '4xl', sm: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Create accessible React apps <chakra.span color="teal">with speed</chakra.span>
        </Heading>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
          Chakra UI is a simple, modular and accessible component library that gives you the
          building blocks you need to build your React applications.
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          w={{ base: '100%', sm: 'auto' }}
          spacing={5}
        >
          <Button
            colorScheme="teal"
            variant="solid"
            rounded="md"
            size="lg"
            height="4rem"
            fontSize="1.2rem"
          >
            Get Started
          </Button>
          <Button
            leftIcon={<FaGithub />}
            colorScheme="gray"
            rounded="md"
            size="lg"
            variant="outline"
            height="4rem"
            fontSize="1.2rem"
          >
            Github
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
