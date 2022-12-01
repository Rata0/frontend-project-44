#!/usr/bin/env node

//const parityCheckGame
const evenOrOdd = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  let reply = '';
  if (randomNumber % 2 === 0) {
    reply = 'yes';
  } else {
    reply = 'no';
  }
  return `${randomNumber} ${reply}`;
};
