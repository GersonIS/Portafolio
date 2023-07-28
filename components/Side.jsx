import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
export const Side = () => {
    return (
        <Container gap={0} >
            <Row>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                1 of 2
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                2 of 2
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}