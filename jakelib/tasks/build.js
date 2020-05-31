const { execSync } = require('child_process');

const build = () => {
  // Process potential script arguments in `package.json`
  const command = process.argv.reduce((accumulator, argument) => {
    switch(argument) {
      case 'project':
        accumulator = 'rollup -c';
        return accumulator;

      case 'storybook':
        accumulator = 'build-storybook -o docs';
        return accumulator;

      default:
        accumulator = 'rollup -c && build-storybook -o docs';
        return accumulator;
    }
  }, '');

  // Execute shell command
  execSync(command, { stdio: 'inherit' });

};

module.exports = { build };