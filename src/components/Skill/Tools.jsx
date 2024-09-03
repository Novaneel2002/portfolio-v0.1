import { Box, css, Grid, GridItem, Text } from '@chakra-ui/react'
import { GoTools } from "react-icons/go";
import { keyframes } from "@chakra-ui/react";

// Define keyframes for the floating animation
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

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
    75% { top: 6%; left: 97%; transform: translateY(-100%); }
    100% {top: 92%; left: 97%;}

  `;
  const scrollani = keyframes`
  from {
      opacity: 0;
      transform: scale(0.5);
  }
  to {
      opacity: 1;
      transform: scale(1);
  }
  `;
  const animatedStyles = css({
      animationTimeline: "view()",
      animationRange: "entry 0 cover 40%",
    });
const Tools = () => {
    return (
        <>
            <Box w="100%" h='100vh' border="groove 10px #88fdfd" borderBottom="none">
                <Box
                    position="absolute"
                    width="99%"
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
                <Box bg="#88fdfd42" border="groove 10px #88fdfd" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe" borderLeft="solid 12px #000000" borderRadius="10px" position="relative" w="30rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" ml="-0.75rem" mt="3rem" fontSize="2rem">
                    <GoTools />

                    <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">TOOLS</Text>
                </Box>
                <Grid
                    padding="1rem"
                    px="16rem"
                    h='83vh'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={5}
                >

                    <GridItem rowSpan={1} colSpan={1} bg='#000000' />
                    <GridItem rowSpan={1} colSpan={1} background="linear-gradient(to top, #2b808083, #000000)" animation={`${scrollani} linear,${floatAnimation} 3s ease-in-out infinite`}
                css={animatedStyles} mx="6rem" border="groove #88fdfd 5px" borderRadius="50%" _hover={{
                        borderRadius: "50%",
                        border: "7px dashed #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} display="flex" pt="2rem" flexDirection="column" justifyContent="space-around" alignItems="center" gap={3}>
                        <img src="./resources/vs.png" alt="" height="120px" width="120px" />
                        <Text fontSize="1.3rem" fontWeight="bolder">VS Code</Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='#000000' />
                    <GridItem rowSpan={1} colSpan={1} background="linear-gradient(to top, #2b808083, #000000)" animation={`${scrollani} linear,${floatAnimation} 3s ease-in-out infinite`}
                css={animatedStyles} mx="6rem" border="groove #88fdfd 5px" borderRadius="50%" _hover={{
                        borderRadius: "50%",
                        border: "7px dashed #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} display="flex" pt="2rem" flexDirection="column" justifyContent="space-around" alignItems="center" gap={3}>
                        <img src="./resources/git.png" alt="" height="120px" width="120px" />
                        <Text fontSize="1.3rem" fontWeight="bolder">GIT</Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='#000000' />
                    <GridItem rowSpan={1} colSpan={1} background="linear-gradient(to top, #2b808083, #000000)" animation={`${scrollani} linear,${floatAnimation} 3s ease-in-out infinite`}
                css={animatedStyles} mx="6rem" border="groove #88fdfd 5px" borderRadius="50%" _hover={{
                        borderRadius: "50%",
                        border: "7px dashed #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} display="flex" pt="2rem" flexDirection="column" justifyContent="space-around" alignItems="center" gap={3}>
                        <img src="./resources/github.png" alt="" height="120px" width="120px" />
                        <Text fontSize="1.3rem" fontWeight="bolder">GitHub</Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='#000000' />
                    <GridItem rowSpan={1} colSpan={1} background="linear-gradient(to top, #2b808083, #000000)" animation={`${scrollani} linear,${floatAnimation} 3s ease-in-out infinite`}
                css={animatedStyles} mx="6rem" border="groove #88fdfd 5px" borderRadius="50%" _hover={{
                        borderRadius: "50%",
                        border: "7px dashed #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} display="flex" pt="2rem" flexDirection="column" justifyContent="space-around" alignItems="center" gap={3}>
                        <img src="./resources/firebase.png" alt="" height="120px" width="120px" />
                        <Text fontSize="1.3rem" fontWeight="bolder">FIREBASE</Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} bg='#000000' />







                </Grid>
            </Box>


        </>
    )
};

export default Tools;