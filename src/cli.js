import readlineSync from 'readline-sync/lib/readline-sync.js';

export function welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function check(name, result, count) {
  let correct = true;
  const answer = readlineSync.question('Your answer: ');
  if (result.toString() === answer.toLowerCase() && count === 2) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    return correct;
  }
  if (result.toString() === answer.toLowerCase()) {
    console.log('Correct!');
    return correct;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
  console.log(`Let's try again, ${name}!`);
  correct = false;
  return correct;
}
