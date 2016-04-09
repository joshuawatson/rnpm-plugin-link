const compose = require('lodash').flowRight;
const readFile = require('./fs').readFile;

module.exports = function isInstalled(projectConfig, name) {
  return compose(
    (content) => ~content.indexOf(`:${name}`),
    readFile(projectConfig.buildGradlePath)
  )();
};
