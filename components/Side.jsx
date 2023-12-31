import { Image, Row, Text, Grid, Link, Container } from "@nextui-org/react";

export const Side = () => {
    return (
        <Grid.Container css={{ paddingTop: "$16", paddingBottom: "$15", marginTop: "$15", h: "100%" }} >
            <Grid css={{ justifyContent: "center", alignItems: "center", display: "flex", paddingTop: "$10" }} xs={12} sm={6}>
                <Container css={{ textAlign: "center" }}>
                    <Text h2 color="black" >
                        Hi! I'm Gerson ✌️
                    </Text>
                    <Text size={20} color="black" >
                        Junior Developer and I love learning new things about the world of programming, developing new skills and being in continuous learning. Get to know me a little more and I will surely surprise you.
                    </Text>
                    <Row css={{ marginTop: "$10", justifyContent: "center" }}>
                        <Link href="https://www.instagram.com/gerson_rodriguez_tkd/" target="_blank">
                            <img
                                width={40}
                                height={40}
                                src="/instagram.png"
                                alt="Default Image"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/gerson-roberth-de-la-cruz-rodr%C3%ADguez-2539a1263/" target="_blank" css={{ marginRight: "$5", marginLeft: "$5" }}>
                            <img
                                width={40}
                                height={40}
                                src="/linkedin.png"
                                alt="Default Image"
                            />
                        </Link>
                        <Link href="https://github.com/GersonIS" target="_blank">
                            <img
                                width={40}
                                height={40}
                                src="/github.png"
                                alt="Default Image"
                            />
                        </Link>
                    </Row>
                </Container>
            </Grid>
            <Grid css={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "$10", paddingTop: "$10", paddingBottom: "$13" }} xs={12} sm={6}>
                <Image
                    showSkeleton
                    css={{ borderRadius: "50%" }}
                    maxDelay={10000}
                    src="/perfil.jpg"
                    alt="Default Image"
                />
            </Grid>
            <Grid css={{ justifyContent: "center", alignItems: "center", display: "flex" }} xs={12}>
                <Image
                    showSkeleton
                    width={180}
                    height={180}
                    maxDelay={10000}
                    css={{borderRadius: "8px"}}
                    src="/tenor.gif"
                    alt="Default Image"
                />
            </Grid>
        </Grid.Container >
    );
}