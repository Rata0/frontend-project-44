#!/usr/bin/env node
import gameBase from '../src/index.js';

const calsCaption = 'What is the result of the expression?';

const calsGame = () => {
  const mathSymbol = ['*', '-', '+'];
  const randomSymbol = mathSymbol[Math.floor(Math.random() * mathSymbol.length)];
  const namberOne = Math.floor(Math.random() * 101);
  const nambeTwo = Math.floor(Math.random() * 11);
  const keySymbol = {
    plus: namberOne + nambeTwo,
    minus: namberOne - nambeTwo,
    multiplication: namberOne * nambeTwo,
  };

  const expression = `${namberOne} ${randomSymbol} ${nambeTwo}`;

  let reply = '';
  if (randomSymbol === '+') {
    reply = keySymbol.plus;
  } else if (randomSymbol === '-') {
    reply = keySymbol.minus;
  } else if (randomSymbol === '*') {
    reply = keySymbol.multiplication;
  }

  return [calsCaption, reply]; // Массив хранит данные для использования аргуменами в index.js
};

calsGame();
