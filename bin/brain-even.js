#!/usr/bin/env node
import gameBase from '../src/index.js';

const evenOrOddGame = () => {
  const evenCaption = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isParityCheckIntruction = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    let reply = '';
    if (randomNumber % 2 === 0) {
      reply = 'yes';
    } else {
      reply = 'no';
    }
    return [evenCaption, randomNumber, reply]; // Массив хранит данные -ИГРЫ
  };
  gameBase(isParityCheckIntruction);
};
evenOrOddGame();
