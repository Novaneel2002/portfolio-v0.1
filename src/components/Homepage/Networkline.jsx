import { Box, keyframes } from "@chakra-ui/react";
const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px #bdffff, 0 0 30px #bdffff, 0 0 45px #fcfcfc;
  }
  50% {
    box-shadow: 0 0 5px #bdffff, 0 0 10px #bdffff, 0 0 15px #f7f7f7;
  }
`;
const Networkline = () => {
  return <>
    <Box position="absolute" h="300vh" w="100%">
      <Box
        bgColor="#bdffff"
        position="relative"
        top="2rem"
        w="3rem"
        h="3rem"
        borderRadius="50%"
        margin="auto"
        animation={`${pulse} 2s infinite`}
      />            <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="10px" h="242vh" margin="auto"></Box>

      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="17.9rem" h="10px" pos="relative" bottom="76%" left="50%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="17.9rem" h="10px" pos="relative" bottom="68.5%" left="35.1%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="17.9rem" h="10px" pos="relative" bottom="60%" left="50%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="17.9rem" h="10px" pos="relative" bottom="43%" left="35.1%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="17.9rem" h="10px" pos="relative" bottom="35%" left="50%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="17.9rem" h="10px" pos="relative" bottom="27%" left="35.1%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="25rem" h="10px" pos="relative" bottom="10%" left="29%"></Box>
      <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="25rem" h="10px" pos="relative" bottom="10.35%" left="50%"></Box>
      {/* <Box boxShadow="0 0 15px #bdffff" bgColor={"#bdffff"} w="10px" h="10rem" pos="relative" bottom="10.67%" left="80.6%"></Box> */}
      {/* <Box boxShadow="0 0 15px #bdffff" bgColor={"#a6ff00"} w="10px" h="10rem" pos="relative" bottom="16%" left="19%"></Box> */}
    </Box>

  </>
}

export default Networkline;