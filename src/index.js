import readlineSync from 'readline-sync';
import isWelcomeUser from './cli.js';

isWelcomeUser();

const gameBase = (gameSelected) => {
  const assignment = gameSelected[0];
  console.log(assignment);

  for (let i = 3; i > 0; i -= 1) {
    const questionAndAnswer = gameSelected;
    console.log(`Question: ${questionAndAnswer[1]}`);
    const userResponse = readlineSync.question('Your answer: ');
    const rightAnswer = gameSelected[2];
    if (userResponse === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${username}!`);
    }
  }
  console.log(`Congratulations, ${username}`);
};

export default gameBase;