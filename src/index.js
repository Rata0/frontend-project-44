import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);

const commonLogic  = (gameData, task) => {
  const descriptionUpload = task;
  console.log(descriptionUpload);

  for (let i = 3; i > 0; i -= 1) {
    const dataUpload = gameData();
    console.log(`Question: ${dataUpload.question}`);
    const playerAnswer  = readlineSync.question('Your answer: ');
    const correctAnswer = dataUpload.reply;
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${username}!`);
      return;
    }
  };
  console.log(`Congratulations, ${username}!`);
};

export default commonLogic;