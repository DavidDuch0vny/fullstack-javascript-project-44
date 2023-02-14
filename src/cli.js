import readlineSync from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/node_modules/readline-sync/lib/readline-sync.js';

export function welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function check(name, result) {
  let correct = true;
  const answer = readlineSync.question('Your answer: ');
  if (result.toString() === answer.toLowerCase()) {
    console.log('Correct!');
    return correct;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
  console.log(`Let's try again, ${name}!`);
  correct = false;
  return correct;
}

export function gCD(num1, num2) {
  let result = 0;
  let a = num1;
  let b = num2;
  while(a != b){
      if(a > b) {
        a -= b;
      }
      else {
        b -= a;
      }
    }
  result = a;
  return result;
}