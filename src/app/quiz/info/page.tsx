'use client';
import { useState } from "react";
import { z } from "zod";
import { Button, Card, CardBody, CardText, CardTitle, Form, Container, Row, Col } from "react-bootstrap";
import UserInfo from "../model/UserInfo";
import ValidationResult from "./validation";

export default function UserInfoForm() {
    const UserInfoSchema = z.object({
        firstName: z.string().min(1, { message: "Merci d'indiquer ton prénom" }),
        gender: z.enum(['HOMME', 'FEMME', 'FLUIDE'], { message: "Merci d'indiquer ton genre" }),
    }).required();

    const [errors, setErrors] = useState([]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData)
        const results = UserInfoSchema.safeParse(formValues)
        if (results.success) {
            const data = results.data;
            const userInfo = new UserInfo(data.firstName, data.gender);
            setErrors([])
        } else {
            let errs = Object.entries(results.error.issues).map(([key, value]) => value.message);
            setErrors(errs);
        }
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className='text-center'>
                            <h1>Deviens le héros que tu es...</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <ValidationResult validationErrors={errors} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className='text-center'>
                            <fieldset>
                                <legend> Pour obtenir la Taoscopie de ce test, renseigne quelques informations</legend>
                                <Form.Group controlId="firstName">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control name="firstName" />
                                </Form.Group>
                                <Form.Group controlId="gender">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Select aria-label="Genre" name="gender">
                                        <option></option>
                                        <option value="HOMME">Homme</option>
                                        <option value="FEMME">Femme</option>
                                        <option value="FLUIDE">Fluide</option>
                                    </Form.Select>
                                </Form.Group>
                            </fieldset>
                        </Col>
                    </Row >
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className='text-center'>
                            <Button variant='primary' size='lg' type="submit">
                                Continuer
                            </Button>
                        </Col>
                    </Row>
                </Container >
            </Form >
        </>
    );
}
