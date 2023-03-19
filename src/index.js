import { check, welcome } from './cli.js';

const gameIndex = (title, qa) => {
  const name = welcome();
  console.log(title);
  let correct = true;
  let count = 0;

  while (correct && count < 3) {
    const newQA = qa();
    console.log(`Question: ${newQA[0]}`);
    correct = check(name, newQA[1], count);
    count += 1;
  }
};

export default gameIndex;
