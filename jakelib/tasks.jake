const rimraf = require('rimraf');
const fs = require('fs');
const { execSync } = require('child_process');

namespace('tasks', () => {
  // Build scripts
  desc('Builds project and/or Storybook.');
  task(
    'build',
    { async: true },
    function build() {
      // Process potential script arguments in `package.json`
      const command = process.argv.reduce((accumulator, argument) => {
        switch(argument) {
          case 'project':
            accumulator = 'rollup -c';
            return accumulator;

          case 'storybook':
            accumulator = 'build-storybook';
            return accumulator;

          default:
            accumulator = 'rollup -c && build-storybook';
            return accumulator;
        }
      }, '');

      // Execute shell command
      execSync(command, { stdio: 'inherit' });

      // Post build Storybook script
      if(command.includes('build-storybook')) {
        const storybook = 'storybook-static';
        const docs = 'docs';

        // Rename "storybook-static" to "docs" for GitHub pages
        rimraf(docs, () => console.log(`${docs} deleted.`));
        fs.rename(storybook, docs, () => console.log(`${storybook} renamed to ${docs}.`));
      }
    });


  // Start scripts
  desc('Starts project or Storybook.');
  task(
    'start',
    { async: true },
    function start() {
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
    });


  // Clean scripts
  desc('Cleans project "junk" files.');
  task(
    'clean',
    { async: true },
    function clean() {
      // Process potential script arguments in `package.json`
      const files = process.argv.reduce((accumulator, argument) => {
        switch(argument) {
          case 'project':
            accumulator = [ 'dist', 'node_modules' ];
            return accumulator;

          case 'storybook':
            accumulator = [ 'docs', 'storybook-static' ];
            return accumulator;

          default:
            accumulator = [ 'dist', 'docs', 'node_modules', 'storybook-static' ];
            return accumulator;
        }
      }, []).push('package-lock.json');


      // Delete selected file(s)
      files.forEach(file => {
        try {
          rimraf(file, () => console.log(`${file} deleted.`));
        } catch (error) {
          console.error(`unable to delete ${file}: ${error}`);
        }
      });
    });


  // Test scripts
  desc('Runs tests (all, build, lint, unit, or watch).');
  task(
    'test',
    { async: true },
    function test() {
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
    });
});