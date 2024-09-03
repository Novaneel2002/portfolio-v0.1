import React from 'react';
import { Box, Button, Container, keyframes, Text } from '@chakra-ui/react';
import Navbar from "./Navbar"
import Welcome from "./Welcome"
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const floatingAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const floatingAnimationY = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px #bdffff, 0 0 30px #bdffff, 0 0 45px #fcfcfc;
  }
  50% {
    box-shadow: 0 0 5px #bdffff, 0 0 10px #bdffff, 0 0 15px #f7f7f7;
  }
`;
// Define keyframes for sliding in from the left
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Define keyframes for sliding in from the right
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const Home = () => {
  return (
    <Box boxShadow="inset 0px -90px 70px #000000" position="relative" width="100%" height="100vh" overflow="hidden">
      {/* Background Image or Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '51%',
          left: '50%',
          width: '100%',
          height: '94%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-5',
        }}
      >
        <source src="./resources/intro.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the background */}
      <Navbar />
      <Box h="87.9vh" w="100%" display="flex" alignItems="center" position="relative" zIndex="1">
        <Box>
          {/* <Box
            marginLeft="0.5rem"
            // p="2rem"
            // borderRadius="50%"
            backgroundColor="#bdffff86"
            animation={`${slideInLeft} 1s ease-in-out, ${pulse} 2s infinite`}>
            
          </Box> */}
          <Link to="/portfolio-v0.1/skills">
            <Button
              backgroundColor="#bdffff86"
              mt="4.5rem"
              p="1rem"
              py="2.5rem"
              h="95vh"
              w="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              animation={`${slideInLeft} 1s ease-in-out, ${floatingAnimationY} 2s infinite`}
            >
              <Text display="flex" gap={200}
                transform="rotate(270deg)"
                transformOrigin="center"
                whiteSpace="nowrap"
                fontSize="2rem"
              >
                <MdOutlineKeyboardDoubleArrowUp />
                S K I L L S<MdOutlineKeyboardDoubleArrowUp />

              </Text>
            </Button>
          </Link>


        </Box>

        <Box mx="34rem" my="rem" h="3rem" w="45rem">
          <Welcome />
        </Box>
        {/* <Box
          marginRight="5rem"
          // p="2rem"
          borderRadius="50%"
          backgroundColor="#bdffff86"
          animation={`${slideInRight} 1s ease-in-out, ${pulse} 2s infinite`}>
          <Link to={"/works"}>
            <Button
              p="1rem" py="2.5rem" borderRadius="50%"
            >
              WORKS
            </Button>
          </Link>
        </Box> */}
        <Link to="/portfolio-v0.1/works">
            <Button
            marginLeft="0.6rem"
              backgroundColor="#bdffff86"
              mt="4.5rem"
              p="1rem"
              py="2.5rem"
              h="95vh"
              w="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              animation={`${slideInLeft} 1s ease-in-out, ${floatingAnimationY} 2s infinite`}
            >
              <Text display="flex" gap={200}
                transform="rotate(90deg)"
                transformOrigin="center"
                whiteSpace="nowrap"
                fontSize="2rem"
              >
                <MdOutlineKeyboardDoubleArrowUp />
                W O R K S<MdOutlineKeyboardDoubleArrowUp />

              </Text>
            </Button>
          </Link>

      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        h="10vh"
        animation={`${floatingAnimation} 3s ease-in-out infinite`} // Apply floating animation
      >
        <Container gap="5px" display="flex" alignItems="center" flexDirection="column">
          <Text fontWeight="bold" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe" fontSize="1.2rem">
            Swipe to know more
          </Text>
          <FaAnglesDown fontSize="1.4rem" color="#24f8f8" />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
