const { execSync } = require('child_process');

const start = () => {
  // Process potential script arguments in `package.json`
  const command = process.argv.reduce((accumulator, argument) => {
    switch(argument) {
      case 'project':
        accumulator = 'rollup -c -w';
        return accumulator;

      case 'storybook':
        accumulator = 'start-storybook -p 9009';
        return accumulator;

      default:
        accumulator = 'rollup -c -w start-storybook -p 9009';
        return accumulator;
    }
  }, '');

  // Execute shell command
  execSync(command, { stdio: 'inherit' });
};

module.exports = { start };