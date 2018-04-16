import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./src', true, /\.spec\.ts$/);

testsContext.keys().forEach(testsContext)