// require all test files (files that end with .spec.js)
const testsContext = require.context('./src', true, /\.spec\.ts$/);

testsContext.keys().forEach(testsContext)