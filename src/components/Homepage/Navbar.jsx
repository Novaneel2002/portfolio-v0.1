// Navbar.js
import { Box, Flex, Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box position="sticky" maxH="4rem" bg="#32c7c7" opacity="1" px={4} >
      <Flex maxH="3rem" maxW={"80vw"} bg="#32c7c7" h={16} alignItems="center" justifyContent="space-evenly" m="auto">
        <Link fontSize="1.2rem" px={4} py={2} rounded="md" color="#ffffff" _hover={{ textDecoration: 'none', bg: '#ffffff', color: '#32c7c7' }} href="/resume">
          Resume
        </Link>
        <Link fontSize="1.2rem" px={4} py={2} rounded="md" color="#d2f7f7" _hover={{ textDecoration: 'none', bg: '#ffffff', color: '#32c7c7' }} href="/">
          Home
        </Link>
        <Link fontSize="1.2rem" px={4} py={2} rounded="md" color="#d2f7f7" _hover={{ textDecoration: 'none', bg: '#ffffff', color: '#32c7c7' }} href="/contact">
          Contact
        </Link>
      </Flex>
   </Box>
  );
}

export default Navbar;
