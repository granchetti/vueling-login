module.exports = {
  default: `--require-module ts-node/register --require features/step_definitions/**/*.ts --format progress --publish --format html:report.html --format-options '{"snippetInterface": "synchronous"}'`,
};
