

const exec = require('child_process').exec;
const directory = process.argv[2];
const cmd = `./node_modules/.bin/webpack --config ./sandbox/${directory}/webpack.config.js`;

console.log(cmd);

exec(cmd);
