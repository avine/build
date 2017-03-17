
# Script is called from command: `./sandbox.launcher.sh <directory>`.
# Thus second argument is the directory.

eval "./node_modules/.bin/webpack --config sandbox/$1/webpack.config.js"
