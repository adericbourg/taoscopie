'use client';

import { useState } from "react";
import Home from "./steps/home";
import Presentation from "./steps/presentation";
import { Item } from "./util/Item";

export default function Quiz() {

  const quizHead = buildQuiz();
  const [currentStep, setCurrentStep] = useState(quizHead);

  function showStep(step: string) {
    return currentStep.value === step;
  }

  function completeStep() {
    // TODO: Extract "get next step" logic to use the linked list
    const nextStep = currentStep.next;
    if (!!nextStep) {
      setCurrentStep(nextStep)
    }
  }

  return (
    <>
      {showStep('home') && <Home onComplete={completeStep} />}
      {showStep('presentation') && <Presentation onComplete={completeStep} />}
    </>
  );
}

function buildQuiz(): Item<string> {
  const home = new Item('home');

  const presentation = new Item('presentation');
  home.next = presentation
  presentation.previous = home;

  // etc

  return home;
}
