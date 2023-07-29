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
                h: "100vh"
            }}
        >
            <Box css={{ h: "calc(100% - 76px)", background: "#191E24" }}>
                <Side />
            </Box>
        </Box >
        <Skill />
        <Project />
        <Contact />
        <Footer />
    </>
);