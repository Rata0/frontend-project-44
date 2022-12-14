#!/usr/bin/env node
import commonLogic from '../src/index.js';

const description = 'What number is missing in the progression?';

const getProgressionResult = () => {
  const manual = () => {
    const data = {};
    const startOfProgression = Math.floor(Math.random() * 100) + 1;
    const difference = Math.floor(Math.random() * 10) + 1;
    const sequence = [startOfProgression];
    for (let i = 0; i < 9; i += 1) {
      sequence.push(sequence[i] + difference);
    }
    const blank = Math.floor(Math.random() * 10);
    const hiddenElement = sequence[blank];
    data.reply = String(hiddenElement);
    sequence[blank] = '..';
    const line = sequence.join(' ');
    data.question = line;
    return data;
  };
  commonLogic(manual, description);
};
getProgressionResult();
