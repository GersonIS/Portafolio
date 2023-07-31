import { Grid, Image, Input, Text, Textarea } from "@nextui-org/react";
import { Box } from "./Box";

const Contact = () => {
    return (
        <Grid.Container css={{
            display: "flex", justifyContent: "center", alignItems: "center", h: "100%", paddingTop: "$20", paddingBottom: "$20"
        }}>
            < Grid css={{
                textAlign: "center"
            }} xs={12}>
                <Text h2 color="white" css={{ w: "100%" }}>
                    Contact
                </Text>
            </Grid >
            <Grid css={{ display: "flex", justifyContent: "center", alignItems: "center" }} xs={12} md={6}>
                <Input label="Full Name" placeholder="Guillermo Rauch" />
                <Textarea
                    label="Write your thoughts"
                    placeholder="Enter your amazing ideas."
                />
            </Grid>
            <Grid css={{ justifyContent: "center", alignItems: "center", display: "flex" }} xs={12} md={6}>
                <Image
                    showSkeleton
                    width={300}
                    height={300}
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