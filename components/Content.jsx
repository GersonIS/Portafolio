import { Box } from "./Box"
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Project from "./Project";
import ScrollToTopButton from "./ScrollToTopButton";
import { Side } from "./Side";
import Skill from "./Skill";

export const Content = () => (
    <>
        <NavBar />
        <ScrollToTopButton />
        <Box
            id="about"
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$gray500"
            }}
        >
            <Side />
        </Box >
        
        <Box
            id="skill"
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$gray600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Skill />
        </Box>
        <Box
            id="project"
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$gray700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Project />
        </Box>
        <Box
            id="contact"
            css={{
                maxW: "100%",
                h: "100vh",
                background: "$gray800",
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