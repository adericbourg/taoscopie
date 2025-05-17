'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import Quiz from './quiz';

export default function Index() {
  return (
    <Container>
      <h1>TAOSCOPIE <br /><small>Découvre ton archétype</small></h1>
      <Quiz />
    </Container>
  );
}
