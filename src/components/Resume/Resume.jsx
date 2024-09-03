import { Box } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import Navbar from "../Homepage/Navbar";

const html = `
    <div>
    <iframe  src="./resources/Resume.pdf" style="border:none;" width="100%" height="1200px"></iframe>
    </div>
`

const Resume = () => {
    return ( <>
    
        <Navbar/>
        <Box h="200vh" dangerouslySetInnerHTML={{ __html: html }} />

        </>

    )
};


export default Resume;