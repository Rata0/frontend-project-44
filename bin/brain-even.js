#!/usr/bin/env node
import commonLogic from '../src/index.js';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = () => {

  const manual = () => {
    const data = {};
    const randomNumber = Math.floor(Math.random() * 101);
    data.question = randomNumber;

    if (randomNumber % 2 === 0) {
      data.reply = 'yes';
    } else {
      data.reply = 'no';
    }
    return data; 
  };
  commonLogic(manual, description);
};
parityCheck();
