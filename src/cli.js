import readlineSync from 'readline-sync';

const isWelcomeUser = () => {
    let username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
};

export default isWelcomeUser;
