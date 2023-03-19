import gameIndex from '../index.js';

const getQA = () => {
  let isPrime = 'yes';
  const question = (Math.floor(Math.random() * 10) + 2);
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      isPrime = 'no';
      break;
    }
  }
  const qa = [];
  qa.push(question);
  qa.push(isPrime);
  return qa;
};

const brainPrime = () => {
  const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameIndex(title, getQA);
};

export default brainPrime;
