import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/Carouselsection.css';
import { Box, keyframes, Text } from '@chakra-ui/react';
import { SiPolymerproject } from "react-icons/si";

const moveBall1 = keyframes`
    0% { top: 3%; left: 1%; }
    25% { top: 3%; left: 99%; transform: translateX(-100%); }
    50% { top: 98%; left: 99%; transform: translate(-100%, -100%); }
    75% { top: 98%; left: 1%; transform: translateY(-100%); }
    100% { top: 3%; left: 1%; }
  `;
const moveBall2 = keyframes`
     0% {top: 95%; left: 98%; }
    25% {top: 95%; left: 2.5%;  transform: translateX(-100%); }
    50% { top: 6%; left: 2.5%;  transform: translate(-100%, -100%); }
    75% { top: 6%; left: 98%; transform: translateY(-100%); }
    100% {top: 92%; left: 98%;}

  `;
const Carouselsection = () => {
  return (<>



    <Box
      position="absolute"
      top="11rem"
      width="100%"
      height="100vh"
      // border="2px solid red"
      borderRadius="10px"
      overflow="hidden"
    // bg="#88ffff0"
    >
      <Box
        position="absolute"
        width="30px"
        height="30px"
        bg="#c3fff8"
        borderRadius="50%"
        boxShadow="3px 3px 30px 3px"
        animation={`${moveBall1} 10s linear infinite`}
        zIndex={-1}
      />
      <Box
        position="absolute"
        width="30px"
        height="30px"
        bg="#c3fff8"
        borderRadius="50%"
        boxShadow="3px 3px 30px 3px"
        animation={`${moveBall2} 10s linear infinite`}
        zIndex={-1}
      />
    </Box>
    <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="10px" w="50rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" fontSize="2rem">
      <SiPolymerproject />

      <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">PROJECTS</Text>
      <SiPolymerproject />


    </Box>
    <Carousel interval={2000}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Box backgroundColor="#000000" borderRadius="20px" border="groove 10px #88fdfd" h="50rem">
          <img

            className="d-block w-100"
            src="./resources/ddos.webp"
            alt="First slide"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill', // Ensures the image covers the container
              borderRadius: "20px",
              opacity: "60%"
            }}
          />
        </Box>

        <Carousel.Caption>
          <h3>DDoS Attack Prediction</h3>
          <p>Domain - Machine learning, Web Development</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Box backgroundColor="#000000" borderRadius="20px" border="groove 10px #88fdfd" h="50rem">
          <img
            className="d-block w-100"
            src="./resources/deg.webp"
            alt="First slide"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill', // Ensures the image covers the container
              borderRadius: "20px",
              opacity: "60%"
            }}
          />
        </Box>

        <Carousel.Caption>
          <h3>Dog Breed Identification Model</h3>
          <p>Domain - Machine Learning</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Box backgroundColor="#000000" borderRadius="20px" border="groove 10px #88fdfd" h="50rem">
          <img
            className="d-block w-100"
            src="./resources/Addovedi.webp"
            alt="First slide"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Ensures the image covers the container
              borderRadius: "20px",
              opacity: "60%"
            }}
          />
        </Box>

        <Carousel.Caption>
          <h3>ADDOVEDI 2022 Official Website</h3>
          <p>
            Domain - Web Development
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
};

export default Carouselsection;
