import { Box, HStack, keyframes, Stack, Text } from "@chakra-ui/react"
// import Networkline from "./Networkline";
// import styled from "styled-components"
import { Customcard } from "../../chakra/Customcard";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaHandHoldingHand } from "react-icons/fa6";


// import NetworkFlowDiagram from "./networkflow";
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
const Content1 = () => {
    return (
        <>

            <HStack position="absolute" 
            // boxShadow="0px -70px 39px 46px #000000" 
            h="100vh" w="100%" borderTop="dotted 20px #5d8787dc" >
                <Box
                    position="absolute"
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
                <Box
                    position="absolute"
                    top="100vh"
                    width="100%"
                    height="100vh"
                    // border="2px solid red"
                    borderRadius="10px"
                    overflow="hidden"
                // bg="#88ffff16"
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
                <Box
                    position="absolute"
                    top="200vh"
                    width="100%"
                    height="100vh"
                    // border="2px solid red"
                    borderRadius="10px"
                    overflow="hidden"
                // bg="#88ffff16"
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
                {/* EDUCATION section */}
                <Box bg="#88fdfd42"
                    
                    border="groove 10px #88fdfd" borderLeft="none" borderRadius="10px" position="relative" w="30rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" bottom="25rem" left="-1rem" fontSize="2rem">
                    <HiOutlineAcademicCap />

                    <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe"> EDUCATION</Text>
                </Box>

                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="65%" top="10%">
                    <Box>
                        <Text fontSize="1.7rem">National Institute of Technology</Text>
                        <Text fontSize="1rem">Arunachal Pradesh</Text>
                    </Box>
                    <Box>
                        <Text fontSize="1.5rem">B tech </Text>
                        <Text fontSize="1.2rem">Computer Science Engineering</Text>
                    </Box>
                    <Box>
                        <Text justifyContent="end" fontSize="1rem">2020-2024</Text>
                    </Box>



                </Customcard>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="10%" >
                    <Box>
                        <Text fontSize="1.7rem">Vivekananda Kendra Vidyalaya Itanagar</Text>
                        <Text fontSize="1rem">Arunachal Pradesh</Text>
                    </Box>
                    <Box>
                        <Text fontSize="1.5rem">Senior Secondary Education</Text>
                        <Text fontSize="1.2rem">Central Board of Secondary Education</Text>
                    </Box>
                    <Box>
                        <Text justifyContent="end" fontSize="1rem">2018-2020</Text>
                    </Box>
                </Customcard>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="65%" top="60%">
                    <Box>
                        <Text fontSize="1.7rem">Vivekananda Kendra Vidyalaya Itanagar</Text>
                        <Text fontSize="1rem">Arunachal Pradesh</Text>
                    </Box>
                    <Box>
                        <Text fontSize="1.5rem">Secondary Education</Text>
                        <Text fontSize="1.2rem">Central Board of Secondary Education</Text>
                    </Box>
                    <Box>
                        <Text justifyContent="end" fontSize="1rem">2016-2018</Text>
                    </Box>
                </Customcard>
                {/* EXPERIENCE section */}
                <Box bg="#88fdfd42" border="groove 10px #88fdfd" borderRight="none" borderRadius="10px" w="30rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" position="relative" top="60%" left="58.4rem" fontSize="2rem">
                    <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">EXPERIENCE</Text>
                    <MdWork />

                </Box>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="10%" top="163%">
                    <Box>
                        <Text fontSize="1.7rem">  Full Stack Web Development Intern</Text>
                        <Text fontSize="1rem">Solar Secure Solutions</Text>
                    </Box>
                    {/* <Box>
                        <Text fontSize="1.5rem">Senior Secondary Education</Text>
                        <Text fontSize="1.2rem">Central Board of Secondary Education </Text>
                    </Box> */}
                    <Box>
                        <Text justifyContent="end" fontSize="1rem"> 2022</Text>
                    </Box>
                </Customcard>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="65%" top="138%" >
                    <Box>
                        <Text fontSize="1.7rem">Audio Classification Intern</Text>
                        <Text fontSize="1rem"> Delhi Technological University</Text>
                    </Box>
                    {/* <Box>
                        <Text fontSize="1.5rem">Senior Secondary Education</Text>
                        <Text fontSize="1.2rem">Central Board of Secondary Education</Text>
                    </Box> */}
                    <Box>
                        <Text justifyContent="end" fontSize="1rem">2022-2023</Text>
                    </Box>
                </Customcard>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="10%" top="113%">
                    <Box>
                        <Text fontSize="1.7rem"> Full Stack Web Developer Intern</Text>
                        <Text fontSize="1rem">Exposys Data Lab</Text>
                    </Box>
                    {/* <Box>
                        <Text fontSize="1.5rem">Senior Secondary Education</Text>
                        <Text fontSize="1.2rem">Central Board of Secondary Education </Text>
                    </Box> */}
                    <Box>
                        <Text justifyContent="end" fontSize="1rem"> 2023</Text>
                    </Box>
                </Customcard>


                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="37.5%" top="249.5%">
                    <Box>
                        <Text fontSize="1.7rem">Ex-President</Text>
                        {/* <Text fontSize="1rem">AKALPANA </Text> */}
                    </Box>
                    <Box>
                        <Text fontSize="1.5rem">AKALPANA</Text>
                        <Text fontSize="1.2rem">College Photography Club</Text>
                    </Box>
                    <Box>
                        <Text justifyContent="end" fontSize="1rem"> 2023-2024</Text>
                    </Box>
                </Customcard>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="4%" top="214.5%">
                    <Box>
                        <Text fontSize="1.7rem">Event Coordinator</Text>
                        {/* <Text fontSize="1rem">Exposys Data Lab</Text> */}
                    </Box>
                    <Box>
                        <Text fontSize="1.5rem">ADDOVEDI</Text>
                        <Text fontSize="1.2rem">College Technical Fest</Text>
                    </Box>
                    <Box>
                        <Text justifyContent="end" fontSize="1rem"> 2022</Text>
                    </Box>
                </Customcard>
                <Customcard display="flex" flexDirection="column" justifyContent="space-between" position="absolute" left="71%" top="214.5%">
                    <Box>
                        <Text fontSize="1.7rem">Event Coordinator</Text>
                        {/* <Text fontSize="1rem">Event Coordinator</Text> */}
                    </Box>
                    <Box>
                        <Text fontSize="1.5rem">ATULYAM</Text>
                        <Text fontSize="1.2rem">College Cultural Fest</Text>
                    </Box>
                    <Box>
                        <Text justifyContent="end" fontSize="1rem">2023</Text>
                    </Box>
                </Customcard>
                <Box bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="10px" w="50rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" position="relative" top="245%" right="26rem" fontSize="2rem">
                    <FaHandHoldingHand />
                    <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">POSITION OF RESPONSIBILITY</Text>
                    <FaHandHoldingHand />

                </Box>

            </HStack>
        </>
    )
}

export default Content1;

