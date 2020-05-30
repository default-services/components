const rimraf = require('rimraf');
const fs = require('fs');
const fse = require('fs-extra');
const { exec } = require('child_process');

const build = () => {
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
  exec(command, { stdio: 'inherit' }, () => {
    if(command.includes('rollup')) {
      fse.copy('src/assets/icons', 'icons', (error) => {
        error ? console.error(error) : console.log('icons copied to top level `icon` folder');
      });
    }

    // Post build Storybook script
    if(command.includes('build-storybook')) {
      const storybook = 'storybook-static';
      const docs = 'docs';

      // Rename "storybook-static" to "docs" for GitHub pages
      rimraf(docs, () => {
        console.log(`${docs} deleted.`);
        fs.rename(storybook, docs, () => console.log(`${storybook} renamed to ${docs}.`));
      });
    }
  });
};

module.exports = { build };