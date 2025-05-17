'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Home({ onComplete }: { onComplete: () => void }) {
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='text-center'>
                    <Image src="/img/hero.png" alt="Mosaique de plusieurs archétypes" fluid />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='text-center'>
                    <Button variant="primary" size="lg" onClick={onComplete}>
                        Commencer
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}