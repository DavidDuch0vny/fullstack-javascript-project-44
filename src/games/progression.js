import gameIndex from '../index.js';

const getQA = () => {
  let result = 0;
  const offsetNumber = (Math.floor(Math.random() * 10) + 1);
  const arrangeLength = (Math.floor(Math.random() * 6) + 5);
  const resultId = Math.floor(Math.random() * arrangeLength);
  const arrange = [];
  arrange[0] = (Math.floor(Math.random() * 100));
  if (resultId === 0) result = arrange[resultId];
  for (let i = 1; i < arrangeLength; i += 1) {
    arrange[i] = arrange[i - 1] + offsetNumber;
    if (i === resultId) {
      result = arrange[resultId];
    }
  }
  arrange[resultId] = '..';
  const question = `${arrange}`.replace(/,/g, ' ');
  const qa = [];
  qa.push(question);
  qa.push(result);
  return qa;
};

const brainProgression = () => {
  const title = 'What number is missing in the progression?';
  gameIndex(title, getQA);
};

export default brainProgression;
