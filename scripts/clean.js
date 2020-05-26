const rimraf = require('rimraf');


// Process potential script arguments in `package.json`
const files = process.argv.reduce((accumulator, argument) => {
  switch(argument) {
    case 'project':
      accumulator = [ ...accumulator, '../dist', '../node_modules' ];
      return accumulator;

    case 'storybook':
      accumulator = [ ...accumulator, '../storybook-static' ];
      return accumulator;

    default:
      return accumulator;
  }
}, [ '../package-lock.json' ]);


// Delete selected file(s)
files.forEach(file => {
  try {
    rimraf(file, () => console.log(`${file} deleted.`));
  } catch (error) {
    console.error(`unable to delete ${file}: ${error}`);
  }
});