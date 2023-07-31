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
                maxW: "100vw",
                h: "100%",
                background: "$gray500"
            }}
            className="section"
        >
            <Side />
        </Box >

        <Box
            id="skill"
            css={{
                maxW: "100vw",
                h: "100%",
                background: "$gray600"
            }}
            className="section"
        >
            <Skill />
        </Box>
        <Box
            id="project"
            css={{
                maxW: "100vw",
                h: "100%",
                background: "$gray700"
            }}
            className="section"
        >
            <Project />
        </Box>
        <Box
            id="contact"
            css={{
                maxW: "100vw",
                h: "100%",
                background: "$gray800"
            }}
            className="section"
        >
            <Contact />
        </Box>
        <Footer />
    </>
);