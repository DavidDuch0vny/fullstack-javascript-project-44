import readlineSync from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/node_modules/readline-sync/lib/readline-sync.js';

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let correct = true;
  let count = 0;
  while (correct && count < 3) {
    const number = Math.floor(Math.random() * 100);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven === answer) console.log('Correct!');
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven}.`);
      console.log(`Let's try again, ${name}!`);
      correct = false;
    }
    count += 1;
  }
};

export default brainEven;
