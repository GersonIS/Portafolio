import { Box } from "./Box"
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Project from "./Project";
import { Side } from "./Side";
import Skill from "./Skill";

export const Content = () => (
    <>
        <NavBar />
        <Box
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$accents5"
            }}
        >
            <Side />
        </Box >
        <Box
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$blue400",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Skill />
        </Box>
        <Box
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$accents5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Project />
        </Box>
        <Box
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$blue400",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Contact />
        </Box>
        <Footer />
    </>
);