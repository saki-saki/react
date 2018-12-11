const commonConfig = require('./jest.config.common')

module.exports = {
  ...commonConfig,
  setupTestFrameworkScriptFile: `${__dirname}/setup.strict.ts`,
}
