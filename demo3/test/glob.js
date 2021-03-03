let glob = require('glob');

// let files = glob.sync('./src/**/*.js');
let files = glob.sync('./src/**/*.{js, jpg}');

console.log('files', files)