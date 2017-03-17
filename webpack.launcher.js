
// Script is called from command: `node ./sandbox.launcher.js <directory>`.
// Thus third argument is the directory.
const directory = process.argv[2];

// Path to webpack binary
const webpack = './node_modules/.bin/webpack';

// Path to webpack config
const config = `./sandbox/${directory}/webpack.config.js`;

// Webpack command
const cmd = `${webpack} --config ${config}`;

// Execute command and preserve stdout colors
const spawn = require('child_process').spawn;
spawn(cmd, {shell: true, stdio: 'inherit'});
