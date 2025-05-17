'use client';

import { Card, CardBody, CardText, CardTitle, Form } from "react-bootstrap";

export default function PII({ pii }: { pii: any }) {

    function setFirstName(value: string) {
        pii.firstName = value;
    }

    function setGender(value: string) {
        pii.gender = value;
    }

    return (
        <>
            <h1>Deviens le héros que tu es...</h1>
            <Card>
                <CardBody>
                    <CardTitle>Pour obtenir la Taoscopie de ce test, renseigne quelques informations</CardTitle>
                    <CardText>
                        <Form>
                            <Form.Group controlId="pii-first-name">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control
                                    controlId="pii-first-name"
                                    value={pii.firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }} />
                            </Form.Group>
                            <Form.Group controlId="pii-gender">
                                <Form.Label>Genre</Form.Label>
                                <Form.Select
                                    aria-label="Genre"
                                    controlId='pii-gender'
                                    value={pii.gender}
                                    onChange={(event) => {
                                        setGender(event.target.value);
                                    }}>
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
        </>
    );
}
