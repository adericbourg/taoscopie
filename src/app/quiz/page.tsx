import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Introduction() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='text-center'>
                    <Image src="./img/presentation_top.png" alt="Mosaique de plusieurs archétypes" fluid />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='text-center'>
                    <Stack gap={3}>
                        <p>
                            Toutes les sagesses le confirment, chaque être humain est porteur d'un projet,
                            d'une aventure, d'une potentialité souvent bien plus grande que ce qu'il imagine.
                        </p>
                        <p>
                            Pour découvrir ta taoscopie, le test qui suit détient la capacité de révéler et
                            d'activer le potentiel caché de chaque être humain.
                        </p>
                        <p>
                            Dans  quels domaines vas-tu pouvoir éveiller tes pouvoirs ?
                        </p>
                        <p>
                            Quelle est ton projet de vie ? Quel est ton tao ?
                        </p>
                        <p>
                            Qui est le héros de ta propre légende ?
                        </p>

                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='text-center'>
                    <Button variant='primary' size='lg' className='mt-3' href='./quiz/info'>
                        Commencer
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className='text-center'>
                    <Image src="./img/presentation_bottom.png" alt="Mosaique de plusieurs archétypes" fluid />
                </Col>
            </Row>
        </Container>
    );
}