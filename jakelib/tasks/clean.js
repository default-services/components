const rimraf = require('rimraf');

// Files that are deleted no matter which clean method is used
const defaultFiles = [ 'package-lock.json', 'yarn.lock', 'yarn-error.log' ];

const clean = () => {
  // Process potential script arguments in `package.json`
  const files = process.argv.reduce((accumulator, argument) => {
    switch(argument) {
      case 'project':
        accumulator = [ ...accumulator, 'dist', 'node_modules' ];
        return accumulator;

      case 'storybook':
        accumulator = [ ...accumulator, 'docs', 'storybook-static' ];
        return accumulator;

      default:
        accumulator = [ ...accumulator, 'dist', 'docs', 'node_modules', 'storybook-static' ];
        return accumulator;
    }
  }, defaultFiles);


  // Delete selected file(s)
  // Array.from(new Set()) used to remove potential duplicates
  Array.from(new Set(files)).forEach(file => {
    try {
      rimraf(file, () => console.log(`${file} deleted.`));
    } catch (error) {
      console.error(`unable to delete ${file}: ${error}`);
    }
  });
};

module.exports = { clean };