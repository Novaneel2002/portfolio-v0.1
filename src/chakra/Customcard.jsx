import { chakra } from "@chakra-ui/react";

export const Customcard = chakra('div', {
    baseStyle: {
        textShadow:"0 0 10px #46ffff68, 0 0 5px #437777",
        color:"#d0fefe",
        bg: "#88fdfd42",
        // color: black,
        border: "double 10px #88fdfd",
        borderRadius: "20px",
        p: "6",
        width: "30rem",
        height: "20rem",
        _hover: {
            height: "22rem",
            borderRadius: "10px",
            border: "dashed 10px #88fdfd",
            boxShadow: "0px 0px 25px 5px #88fdfd56"
        }
    }
})


