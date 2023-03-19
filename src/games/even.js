import gameIndex from '../index.js';

const getQA = () => {
  const question = Math.floor(Math.random() * 100);
  const isEven = question % 2 === 0 ? 'yes' : 'no';
  const qa = [];
  qa.push(question);
  qa.push(isEven);
  return qa;
};

const brainEven = () => {
  const title = 'Answer "yes" if the number is even, otherwise answer "no"';
  gameIndex(title, getQA);
};

export default brainEven;
