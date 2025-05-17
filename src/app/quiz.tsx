'use client';

import { useState } from "react";
import Home from "./steps/home";
import Presentation from "./steps/presentation";

export default function Quiz() {

  const [currentStep, setCurrentStep] = useState('home');

  function showStep(step: string) {
    return currentStep === step;
  }

  function completeStep(step: string) {
    // TODO: Extract "get next step" logic to use the linked list
    switch (step) {
      case 'home': {
        setCurrentStep('presentation')
        break;
      }
      case 'presentation': {
        setCurrentStep('quiz1')
        break;
      }
      default: {
        // TODO: reaching here is a bug, handle case
      }
    }
  }

  function showPresentation() {
    completeStep('home');
  }

  function startQuiz() {
    completeStep('presentation');
  }

  return (
    <>
      {showStep('home') && <Home onComplete={showPresentation} /> }
      {showStep('presentation') && <Presentation onComplete={startQuiz} /> }
    </>
  );
}

function buildQuiz() {
  const home = new Item('home');

  const presentation = new Item('presentation');
  home.next = presentation
  presentation.previous = home;

  // etc

}