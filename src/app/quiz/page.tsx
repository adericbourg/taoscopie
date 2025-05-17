'use client';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import Presentation from "./steps/presentation";
import { Item } from "../util/Item";
import { Button, Col, Container, Navbar, Row, Stack } from "react-bootstrap";
import Question from './steps/question';
import PII from './steps/pii';

export default function Quiz() {

  const quizHead = buildQuiz();
  const [currentStep, setCurrentStep] = useState(quizHead);
  const [quizData, setQuizData] = useState({ pii: { firstName: null, gender: null } });

  function showStep(step: string) {
    return currentStep.value === step;
  }

  function goToPreviousStep() {
    const previousStep = currentStep.previous;
    if (!!previousStep) {
      setCurrentStep(previousStep);
    }
  }


  function completeStep() {
    // TODO: Extract "get next step" logic to use the linked list
    const nextStep = currentStep.next;
    if (!!nextStep) {
      setCurrentStep(nextStep)
    }
    console.log(quizData);
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Taoscopie</Navbar.Brand>
        </Container>
      </Navbar>
      <main>
        <Stack direction='vertical' gap={3} className="justify-content-center align-items-center">
          <div>
            {showStep('presentation') && <Presentation />}
            {showStep('pii') && <PII pii={quizData.pii} />}
            {showStep('question') && <Question />}
          </div>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="3" className='d-grid gap-2'>
                <Button variant="outline-secondary" size="lg" onClick={goToPreviousStep}>
                  Retour
                </Button>
              </Col>
              <Col md="auto" />
              <Col xs lg="3" className='d-grid gap-2'>
                <Button variant="primary" size="lg" onClick={completeStep}>
                  Suivant

                </Button>
              </Col>
            </Row>
          </Container>
        </Stack >
      </main>
    </>
  );
}

function buildQuiz(): Item<string> {
  const presentation = new Item('presentation');

  const pii = new Item('pii');
  presentation.next = pii;
  pii.previous = presentation;

  const question = new Item('question');
  pii.next = null;
  question.previous = pii;

  // etc

  return presentation;
}