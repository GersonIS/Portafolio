import { Content } from "./Content"
import { Box } from "./Box";
import NavBar from "./Navbar";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      h: "100vh"
    }}
  >
    <NavBar />
    <Content />
  </Box>
);