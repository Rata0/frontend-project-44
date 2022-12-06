#!/usr/bin/env node
import commonLogic from '../src/index.js';

const description = 'What is the result of the expression?';

const calsGame = () => {
  const manual = () => {
    const data = {};
    const mathSymbol = ['*', '-', '+'];
    const randomSymbol = mathSymbol[Math.floor(Math.random() * mathSymbol.length)];
    const namberOne = Math.floor(Math.random() * 101);
    const namberTwo = Math.floor(Math.random() * 11);
    const calsKey = {
      plus: namberOne + namberTwo,
      minus: namberOne - namberTwo,
      multiplication: namberOne * namberTwo,
    };

    const expression = `${namberOne} ${randomSymbol} ${namberTwo}`;
    data.question = expression;

    if (randomSymbol === '+') {
      data.reply = calsKey.plus.toString();
    } else if (randomSymbol === '-') {
      data.reply = calsKey.minus.toString();
    } else if (randomSymbol === '*') {
      data.reply = calsKey.multiplication.toString();
    }

    return data;
  };
  commonLogic(manual, description);
};

calsGame();
