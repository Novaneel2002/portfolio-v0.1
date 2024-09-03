import { Box, Button, Card, CardBody, CardFooter, CardHeader, css, Icon, keyframes, Text } from "@chakra-ui/react";
import { FaFileSignature } from "react-icons/fa";
import { Grid, GridItem } from '@chakra-ui/react'
import { LiaToolsSolid } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa6";

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
const Projects = () => {
    return <>
        <Box w="100%" h='435vh' border="groove 10px #88fdfd">
            <Box bg="#88fdfd42" border="groove 10px #88fdfd" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe" borderLeft="solid 12px #000000" borderRadius="10px" position="relative" w="30rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" ml="-0.75rem" mt="3rem" fontSize="2rem">
                <FaFileSignature />
                <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">PROJECTS</Text>
            </Box>
            <Grid
                p="10rem"
                h='200vh'
                templateRows='repeat(5, 1fr)'
                templateColumns='repeat(4, 1fr)'
                

            >
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" rowSpan={2} colSpan={1} >
                    <Card transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.05)",
                            borderRadius: "10px",
                            border: "dashed 10px #88fdfd",
                            boxShadow: "0px 0px 25px 5px #88fdfd56",
                        }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                        <CardHeader fontSize="1.5rem" fontWeight="bold">
                            Dice Prediction Game
                        </CardHeader>
                        <CardBody borderTop="solid 1px #88fdfd">
                            <Box h="70%" w="100%">
                                <img src="./resources/dice.webp" alt="" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Ensures the image covers the container
                                    borderRadius: "20px"
                                }} />
                            </Box>
                            <Box fontSize="1.3rem" mt="2rem">
                                <Text><strong>Description here: </strong> A simple Dice game with a score system made for the user to predict the dice value.</Text>
                            </Box>
                        </CardBody>
                        <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                            <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript, React.js.</span></Text>
                            <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Vite.</span></Text>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1}  >
                    <Card transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.05)",
                            borderRadius: "10px",
                            border: "dashed 10px #88fdfd",
                            boxShadow: "0px 0px 25px 5px #88fdfd56",
                        }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                        <CardHeader fontSize="1.5rem" fontWeight="bold">
                            Firebase contact App
                        </CardHeader>
                        <CardBody borderTop="solid 1px #88fdfd">
                            <Box h="70%" w="100%">
                                <img src="./resources/Contact.webp" alt="" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Ensures the image covers the container
                                    borderRadius: "20px"
                                }} />

                            </Box>
                            <Box fontSize="1rem" mt="1rem">
                                <Text><strong>Description here: </strong>Contact App to save contact information having the function to Add, Delete and Edit new Contacts.</Text>
                            </Box>
                        </CardBody>
                        <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                            <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript, React.js.</span></Text>
                            <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Vite, Firebase.</span></Text>
                        </CardFooter>
                    </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={2}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Crypto Currency Dashboard with Authentication
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="80%" w="100%">
                            <img src="./resources/crypto.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                            {/* <Text>Description here</Text> */}
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong> Front End website for Crypto Currency Dashboard containing details such as current Price, Transaction details along with the Authentication of User for security. </Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript, React.js.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Vite, ChakraUI.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Employee Management System FrontEnd
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="60%" w="100%">
                            <img src="./resources/EMS.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1.3rem">
                            <Text><strong>Description here: </strong> Front End website for Employee Management System containing seperate Job and Employee sections.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1} rowSpan={2}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Calorie Burnt Prediction Model
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="70%" w="100%">
                            <img src="./resources/calorieburnt.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong>Machine Learning Model built to predict a person's total Calorie burnt by taking into consideration several factors such as duration of workout, temperature, Heartbeat etc. </Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> Python.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong>Anaconda, Jupyter Notebook.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1}><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Official Webpage of Addovedi 2022
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="50%" w="100%">
                            <img src="./resources/Addovedi.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1.3rem">
                            <Text><strong>Description here: </strong>A Group project built for Technical Fest to make a common portal for everyone for the registration of different Events in the Fest.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript, Express.js.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={2}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Mass Mail Dispatcher Website
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="70%" w="100%">
                            <img src="./resources/massmail.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong> A website made to Filter and seperate out Valid and Invalid Mails to make it easier for the user to get the set of Valid Emails from a bunch of Emails. </Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Bootstrap.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1} rowSpan={2}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Audio Classification Model
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="80%" w="100%">
                            <img src="./resources/audio.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong> High Accuracy Machine Learning Model to Identify the Source of the Sound from the Audio file provided.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong>Python.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong>Anaconda, Jupyter Notebook</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1} rowSpan={1}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Fitness Center Website
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="60%" w="100%">
                            <img src="./resources/Fitness.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.1rem" mt="1rem">
                            <Text><strong>Description here: </strong>Website Built for advertisement of a Local Public Gym.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Bootstrap.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1} rowSpan={2}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Dog Breed Classification Model
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="80%" w="100%">
                            <img src="./resources/dogbreed.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong>Deep Learning Model with an Accuracy of 94% to identify the Breed of Dog from the image provided by the user.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong>Python.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> Google Colab.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1} rowSpan={1}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        DDoS Attack Prediction Model
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="50%" w="100%">
                            <img src="./resources/ddos.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong>Machine Learning model Integrated with Web development to identify the type of DDoS Attack Approach from the provided file.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, Python.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> Anaconda, Jupyter Notebook.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={1}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        Weather App
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="60%" w="100%">
                            <img src="./resources/weather.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong> Website to tell the temperature of a location provided by the user.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript, React.js.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Vite.</span></Text>
                    </CardFooter>
                </Card></GridItem>
                <GridItem animation={`${scrollani} linear`}
                css={animatedStyles} p="2rem" colSpan={2} rowSpan={1}  ><Card transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)",
                        borderRadius: "10px",
                        border: "dashed 10px #88fdfd",
                        boxShadow: "0px 0px 25px 5px #88fdfd56",
                    }} bg="#88fdfd42" border="double 10px #88fdfd" width="100%" h="100%" borderRadius="25px" padding="0.3rem">
                    <CardHeader fontSize="1.5rem" fontWeight="bold">
                        FoodZone Website
                    </CardHeader>
                    <CardBody borderTop="solid 1px #88fdfd">
                        <Box h="80%" w="100%">
                            <img src="./resources/food.webp" alt="" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image covers the container
                                borderRadius: "20px"
                            }} />
                        </Box>
                        <Box fontSize="1.2rem" mt="1rem">
                            <Text><strong>Description here: </strong> Online Food Delivery Website including details of different food items for Breakfast, Lunch, Snacks and Dinner.</Text>
                        </Box>
                    </CardBody>
                    <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                        <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span><strong>Languages:</strong> HTML, CSS, JavaScript, React.js.</span></Text>
                        <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span><strong>Tools: </strong> VS code, Vite, ChakraUI.</span></Text>
                    </CardFooter>
                </Card></GridItem>

            </Grid>
        </Box>
    </>
}


{/* <Card transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        borderRadius: "10px",
        border: "dashed 10px #88fdfd",
        boxShadow: "0px 0px 25px 5px #88fdfd56",
      }} borderRadius="25px" padding="0.3rem">
                    <CardHeader  fontSize="1.5rem" fontWeight="bold">
Dice Prediction Game
                        </CardHeader>
                        <CardBody borderTop="solid 1px #88fdfd">
                            <Box h="80%" w="100%">
                                <img src="" alt="" />
                            </Box>
                            <Box>
                                <Text>Description here</Text>
                            </Box>
                        </CardBody>
                        <CardFooter borderTop="solid 1px #88fdfd" display="flex" flexDirection="column" >
                           <Text><Icon as={LiaToolsSolid} boxSize={6} mr={2} /><span>Languages:</span></Text>
                           <Text><Icon as={FaLaptopCode} boxSize={6} mr={2} /><span>Tools:</span></Text>
                        </CardFooter>
                </Card> */}
export default Projects;