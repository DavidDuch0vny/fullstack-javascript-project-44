import gameIndex from '../index.js';

const getQA = () => {
  let result = 0;
  const qa = [];
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operationNum = Math.floor(Math.random() * 3);
  const operations = ['+', '-', '*'];
  switch (operationNum) {
    case 0: result = num1 + num2;
      break;
    case 1: result = num1 - num2;
      break;
    case 2: result = num1 * num2;
      break;
    default:
      console.log("Operation doesn't exist");
  }
  const question = `${num1} ${operations[operationNum]} ${num2}`;
  qa.push(question);
  qa.push(result);
  return qa;
};

const brainCalc = () => {
  const title = 'What is the result of the expression?';
  gameIndex(title, getQA);
};

export default brainCalc;
