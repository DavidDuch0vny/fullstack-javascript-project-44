import gameIndex from '../index.js';

export function gCD(num1, num2) {
  let result = 0;
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  result = a;
  return result;
}

const getQA = () => {
  const num1 = (Math.floor(Math.random() * 10) + 1);
  const num2 = (Math.floor(Math.random() * 10) + 1);
  const result = gCD(num1, num2);
  const question = `Question: ${num1} ${num2}`;
  const qa = [];
  qa.push(question);
  qa.push(result);
  return qa;
};

const brainGcd = () => {
  const title = 'Find the greatest common divisor of given numbers.';
  gameIndex(title, getQA);
};

export default brainGcd;
