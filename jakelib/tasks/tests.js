const { execSync } = require('child_process');

const tests = () => {
  // Process potential script arguments in `package.json`
  const command = process.argv.reduce((accumulator, argument) => {
    switch(argument) {
      case 'all':
        accumulator = 'run-s test:unit test:lint test:build';
        return accumulator;

      case 'build':
        accumulator = 'run-s build:project';
        return accumulator;

      case 'lint':
        accumulator = 'eslint .';
        return accumulator;

      case 'unit':
        accumulator = 'cross-env CI=1 react-scripts test --env=jsdom';
        return accumulator;

      case 'watch':
        accumulator = 'react-scripts test --env=jsdom';
        return accumulator;

      default:
        accumulator = 'run-s test:unit test:lint test:build';
        return accumulator;
    }
  }, '');

  // Execute shell command
  execSync(command, { stdio: 'inherit' });
};

module.exports = { tests };