import { Box, HStack, keyframes, Link, Stack, Text } from "@chakra-ui/react";
import "./contact.css"
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

const rotation = keyframes`
    from{
        transform:rotateY(0deg);
    }
    to{
        transform:rotate(360deg)
    }
`
const Contactpage = () => {

    return (
        <>
            <Box display="flex" mt="3rem" w="100%" h='78.6vh' border="groove 10px #88fdfd" >

                <Box h="100%" w="50%" display="flex" justifyContent="center" alignItems="center">
                    <Box className="chakra" h="300px" w="300px" position="absolute" marginBottom="15rem" animation={`${rotation} linear 3s infinite`} zIndex={-1}>
                        <Box
                            position="absolute"
                            width="25px"
                            height="25px"
                            bg="#c3fff8"
                            borderRadius="50%"
                            boxShadow="3px 3px 30px 3px"
                        // animation={`${moveBall1} 10s linear infinite`}

                        />
                        <Box
                            position="absolute"
                            width="25px"
                            height="25px"
                            bottom="0"
                            right="0"
                            bg="#c3fff8"
                            borderRadius="50%"
                            boxShadow="3px 3px 30px 3px"
                        // animation={`${moveBall2} 10s linear infinite`}

                        />
                    </Box>
                    <img src="./resources/robo.png" alt="" />
                </Box>
                <Stack h="100%" w="50%" padding="2rem" >
                    <Box h="200px" w="95%" display="flex">
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="3rem 0 0px 3rem" h="100px" w="70%" display="flex" justifyContent="space-between" p="2rem" alignItems="center" fontSize="2rem">
                            <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">Let's Connect on LinkedIn</Text>
                            <FaHandPointRight />

                        </Box>
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="0 3rem 3rem 0" h="100px" w="20%" display="flex" justifyContent="center" p="2rem" alignItems="center" fontSize="2rem">
                            
                            <a href="https://www.linkedin.com/in/novaneel-mandal-a11152234/" >
                                <img src="./resources/link.png" alt="" style={{
                                    height:"50px", width:"65px",
                                    objectFit: 'cover', // Ensures the image covers the container
                                    borderRadius: "5px"
                                }} />
                            </a>
                        </Box>
                    </Box>
                    <Box h="200px" w="95%" display="flex">
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="3rem 0 0px 3rem" h="100px" w="20%" display="flex" justifyContent="center" p="2rem" alignItems="center" fontSize="2rem">
                            <a href="https://www.instagram.com/nova.neel/" >
                                <img src="./resources/insta.png" alt="" style={{
                                    height:"50px", width:"50px",
                                    objectFit: 'cover', // Ensures the image covers the container
                                    borderRadius: "5px"
                                }} />
                            </a>
                        </Box>
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="0 3rem 3rem 0" h="100px" w="70%" display="flex" justifyContent="space-between" p="1.3rem" alignItems="center" fontSize="2rem">
                        <FaHandPointLeft />
                            <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">And follow me on INSTAGRAM</Text>
                        </Box>
                    </Box>
                    <Box h="200px" w="95%" display="flex">
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="3rem 0 0px 3rem" h="100px" w="70%" display="flex" justifyContent="space-between" p="2rem" alignItems="center" fontSize="2rem">
                            <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">You can visit my Github</Text>
                            <FaHandPointRight />
                        </Box>
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="0 3rem 3rem 0" h="100px" w="20%" display="flex" justifyContent="center" p="2rem" alignItems="center" fontSize="2rem">
                            <a href="https://github.com/Novaneel2002" >
                                <img src="./resources/github.png" alt="" style={{
                                    height:"50px", width:"50px",
                                    objectFit: 'cover', // Ensures the image covers the container
                                    borderRadius: "5px"
                                }} />
                            </a>
                        </Box>
                    </Box>
                    <Box h="200px" w="95%" display="flex">
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="3rem 0 0px 3rem" h="100px" w="20%" display="flex" justifyContent="center" p="2rem" alignItems="center" fontSize="2rem">
                            <a href="mailto:novaneel2802@gmail.com" >
                                <img src="./resources/link.png" alt="" style={{
                                    height:"50px", width:"65px",
                                    objectFit: 'cover', // Ensures the image covers the container
                                    borderRadius: "5px"
                                }} />
                            </a>
                        </Box>
                        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="0 3rem 3rem 0" h="100px" w="70%" display="flex" justifyContent="space-between" p="2rem" alignItems="center" fontSize="2rem">
                        <FaHandPointLeft />
                            <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">Or you can Mail me</Text>
                        </Box>
                    </Box>


                </Stack>

            </Box>
        </>
    )
}
export default Contactpage;