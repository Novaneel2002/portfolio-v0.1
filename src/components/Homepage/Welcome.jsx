import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useScramble } from "use-scramble";  // Import useScramble

const Welcome = () => {
  const [showText, setShowText] = useState(true); // State to control text visibility

  const scrambleConfig = {
    speed: 0.5, // Adjust for overdrive effect
    tick: 5,    // Adjust for overdrive effect
    step: 5,
    scramble: 42, // Adjust for overdrive effect
    seed: 1,
    chance: 0.8,
    range: [65, 125],
    overflow: true, // Set overflow to true
  };

  const { ref: welcomeRef, replay: welcomeReplay } = useScramble({ 
    text: showText ? "Welcome . . . " : "",
    ...scrambleConfig,
  });

  const { ref: iAmRef, replay: iAmReplay } = useScramble({ 
    text: showText ? "I Am" : "",
    ...scrambleConfig,
  });

  const { ref: nameRef, replay: nameReplay } = useScramble({ 
    text: showText ? "Novaneel Mandal" : "",
    scramble: 30,
    overflow: true, // Set overflow to true
    ...scrambleConfig,
  });

  const { ref: degreeRef, replay: degreeReplay } = useScramble({ 
    text: showText ? "B.Tech. in Computer Science and Engineering" : "",
    chance: 1,
    overflow: true, // Set overflow to true
    ...scrambleConfig,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText(prev => !prev);  // Toggle text visibility
      if (showText) {
        // Re-trigger the scramble effect if necessary
        welcomeReplay();
        iAmReplay();
        nameReplay();
        degreeReplay();
      }
    }, 8500); // Change text every 5 seconds

    return () => clearInterval(intervalId);  // Cleanup interval on component unmount
  }, [showText, welcomeReplay, iAmReplay, nameReplay, degreeReplay]);

  return (
    <Box  display="flex" flexDir="column" my="-23rem" mx="13rem" h="30rem" w="55rem" fontSize={{ base: "1rem", md: "2rem" }}>
      <Box mt="1rem" ml="1rem" maxW="50%" fontSize="3rem" textAlign="start">
        <Text textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe"  ref={welcomeRef}></Text>
      </Box>

      <Box maxW="100%" fontSize="inherit" marginTop="3rem">
        <Flex 
          h="13rem"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap="4"
        >
          <Box textAlign="end" alignSelf="start">
            <Text textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#88fdfd" ref={iAmRef}></Text>
          </Box>
          <Box textAlign="start" alignSelf="end">
            <Text textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#42fafa" fontSize="4rem" ref={nameRef}></Text>
            <Text textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d2f7f7" fontSize="2rem" ref={degreeRef}></Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Welcome;
