#!/usr/bin/env node
import commonLogic from '../src/index.js';
const description = 'What is the result of the expression?';

const calsGame = () => {

  const manual = () => {
    const mathSymbol = ['*', '-', '+'];
    const randomSymbol = mathSymbol[Math.floor(Math.random() * mathSymbol.length)];
    const namberOne = Math.floor(Math.random() * 101);
    const nambeTwo = Math.floor(Math.random() * 11);
    const data = {
      plus: namberOne + nambeTwo,
      minus: namberOne - nambeTwo,
      multiplication: namberOne * nambeTwo,
    };

    const expression = `${namberOne} ${randomSymbol} ${nambeTwo}`;
    data.question = expression;

    if (randomSymbol === '+') {
      data.reply = data.plus.toString();
    } else if (randomSymbol === '-') {
      data.reply = data.minus.toString();
    } else if (randomSymbol === '*') {
      data.reply = data.multiplication.toString();
    }

    return data;
  };
  commonLogic(manual, description);
};

calsGame();
