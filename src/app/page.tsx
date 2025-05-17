'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import Quiz from './quiz';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <main className="flex-shrink-0">
        <Container>
          <h1>TAOSCOPIE <br /><small>Découvre ton archétype</small></h1>
          <Quiz />
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
