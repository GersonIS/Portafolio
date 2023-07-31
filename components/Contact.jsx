import { Grid, Image, Input, Text, Textarea, Spacer } from "@nextui-org/react";
import { Box } from "./Box";

const Contact = () => {
    return (
        <Grid.Container css={{ display: "flex", justifyContent: "center", alignItems: "center", h: "100%", w: "100vw", paddingTop: "$20", paddingBottom: "$20" }}>
            < Grid css={{ textAlign: "center" }} xs={12}>
                <Text h2 color="white" css={{ w: "100%" }}>
                    Contact
                </Text>
            </Grid >
            <Grid.Container xs={12} gap={1} sm={6} css={{ paddingLeft: "$17", paddingRight: "$17"}}>
                <Grid xs={12} css={{justifyContent: "center"}}>
                    <Input label="Correo" placeholder="Escriba su correo" width="400px" />
                </Grid>
                <Grid xs={12} css={{justifyContent: "center"}}>
                    <Textarea
                        label="Mensaje"
                        placeholder="Escriba su mensaje"
                        width="400px"
                    />
                </Grid>
            </Grid.Container>
            <Grid css={{ justifyContent: "center", alignItems: "center", display: "flex" }} xs={12} md={6}>
                <Image
                    showSkeleton
                    width={252}
                    height={252}
                    maxDelay={10000}
                    css={{ borderRadius: "8px" }}
                    src="/giphy.gif"
                    alt="Default Image"
                />
            </Grid>
        </Grid.Container >
    )
}

export default Contact