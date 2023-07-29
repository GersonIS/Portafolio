import { Container, Grid, Row, Text, Col } from "@nextui-org/react";
import { Box } from "./Box";
const Footer = () => {
    return (
        <Box
            css={{
                maxW: "100%",
                h: "150px",
                background: "#191E24"
            }}
        >
            <Grid.Container css={{ h:"100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                <Grid xs={12}  css={{ textAlign: "center" }}>
                    <Text h6 color="white" css={{w: "100%"}}>
                        Llegaste al final!!!
                    </Text>
                </Grid>
                <Grid xs={12} css={{ textAlign: "center" }}>
                    <Text h6 color="white" css={{w: "100%"}}>
                        Gracias por visitar mi página c:
                    </Text>
                </Grid>
                <Grid xs={12} css={{ textAlign: "center" }}>
                    <Text h6 color="white" css={{w: "100%"}}>
                        Ahora CONTRATAME 🙃
                    </Text>
                </Grid>
            </Grid.Container>
        </Box>
    )
}

export default Footer