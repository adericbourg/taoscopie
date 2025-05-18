'use client';

import { Button, Card, CardBody, CardText, CardTitle, Form, Container, Row, Col } from "react-bootstrap";

export default function UserInfo() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className='text-center'>
                        <h1>Deviens le héros que tu es...</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className='text-center'>
                        <Card>
                            <CardBody>
                                <CardTitle>Pour obtenir la Taoscopie de ce test, renseigne quelques informations</CardTitle>
                                <CardText>
                                    <Form>
                                        <Form.Group controlId="pii-first-name">
                                            <Form.Label>Prénom</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group controlId="pii-gender">
                                            <Form.Label>Genre</Form.Label>
                                            <Form.Select aria-label="Genre">
                                                <option></option>
                                                <option value="HOMME">Homme</option>
                                                <option value="FEMME">Femme</option>
                                                <option value="FLUIDE">Fluide</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Form>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className='text-center'>
                        <Button variant='primary' size='lg'>
                            Continuer
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
