import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Homepage/Navbar";
import { SiFramework } from "react-icons/si";
import Lang from "./Lang";
import Webdev from "./Webdev";
import Interest from "./Interest";
import Tools from "./Tools";

const Skills = () => {
    return <>
        <Navbar />
        <Box margin="auto" mt="5" bg="#88fdfd42" border="groove 10px #88fdfd" borderRadius="10px" w="50rem" h="6rem" display="flex" justifyContent="space-between" p="2rem" alignItems="center" fontSize="2rem">
            <SiFramework />
            <Text mt="20px" textShadow="0 0 10px #46ffff68, 0 0 5px #46ffff67" color="#d0fefe">SKILLS</Text>
            <SiFramework />
        </Box>
        <Lang/>
        <Webdev/>
        <Tools/>
        <Interest/>

    </>
}

export default Skills;