import { Grid, Row, Text, Card, Button } from "@nextui-org/react";
import css from "styled-jsx/css";

const skills = [
    {
        src: "html.png",
        alt: "Image HTML",
        name: "HTML"
    },
    {
        src: "css.png",
        alt: "Image CSS",
        name: "CSS"
    },
    {
        src: "/js.png",
        alt: "Image JS",
        name: "JavaScript"
    },
    {
        src: "/bootstrap.png",
        alt: "Image BOOTSTRAP",
        name: "Bootstrap"
    },
    {
        src: "/laravel.png",
        alt: "Image LARAVEL",
        name: "Laravel"
    },
    {
        src: "/react.png",
        alt: "Image REACT",
        name: "React JS"
    },
    {
        src: "/next.png",
        alt: "Image NEXTJS",
        name: "Next JS"
    },
    {
        src: "/node-js.png",
        alt: "Image NODE",
        name: "Node JS"
    },
    {
        src: "/material-ui.png",
        alt: "Image MATERIAL",
        name: "Material UI"
    },
    {
        src: "/next.png",
        alt: "Image NEXTUI",
        name: "Next UI"
    },
    {
        src: "/sequelize.png",
        alt: "Image SEQUELIZE",
        name: "Sequelize"
    },
]

const Project = () => {
    return (
        <Grid.Container css={{  display: "flex", justifyContent: "center", alignItems: "center", h: "100%", paddingTop: "$20", paddingBottom: "$20" }} gap={2}>
            <Grid css={{ textAlign: "center" }} xs={12}>
                <Text h2 color="white" css={{ w: "100%" }}>
                    Projects
                </Text>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card>
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card>
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card >
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card >
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card >
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card>
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card>
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card>
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} md={4} sm={6} lg={3} css={{paddingLeft: "$15", paddingRight: "$18"}}>
                <Card>
                    <Card.Header>
                        <Text b>Card Title</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-end">
                            <Button size="sm" light>
                                Cancel
                            </Button>
                            <Button size="sm">Agree</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container >
    )
}

export default Project