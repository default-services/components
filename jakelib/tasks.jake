const { build } = require('./tasks/build.js');
const { clean } = require('./tasks/clean.js');
const { start } = require('./tasks/start.js');
const { tests } = require('./tasks/tests.js');

namespace('tasks', () => {

  // Build scripts
  desc('Builds project and/or Storybook.');
  task('build', { async: true }, build);

  // Start scripts
  desc('Starts project or Storybook.');
  task('start', { async: true }, start);

  // Clean scripts
  desc('Cleans project "junk" files.');
  task('clean', { async: true }, clean);

  // Test scripts
  desc('Runs tests (all, build, lint, unit, or watch).');
  task('test', { async: true }, tests);
});