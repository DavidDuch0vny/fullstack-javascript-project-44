import readlineSync from '/mnt/c/users/maksy/onedrive/pulpit/fullstack-javascript-project-44/node_modules/readline-sync/lib/readline-sync.js';

const welcome = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello,${name}!`);
  return name;
};

export default welcome;
