#!/usr/bin/env node
import commonLogic from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = () => {
  const manual = () => {
    const data = {};
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    data.question = randomNumber;
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        data.reply = 'no';
        break;
      } else {
        data.reply = 'yes';
      }
    }
    return data;
  };
  commonLogic(manual, description);
};
getPrimeNumber();
