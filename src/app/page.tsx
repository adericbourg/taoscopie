import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <main className="flex-shrink-0">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className='text-center'>
              <h1>TAOSCOPIE <br /><small>Découvre ton archétype</small></h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className='text-center'>
              <Image src="./img/hero.png" alt="Mosaique de plusieurs archétypes" fluid />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className='text-center'>
              <Button variant="primary" size="lg" href="/quiz">
                Commencer
              </Button>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">
            Réécriture de la <Link href='https://moonlit-raindrop-037ad5.netlify.app/'>Taoscopie originale</Link> à visée éducative.
            Ce site n'a aucun lien avec Taoworld.
          </span>
        </Container>
      </footer>
    </>
  );
}
