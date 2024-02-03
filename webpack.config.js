const path = require('path');

module.exports = {
  // Other configuration settings...
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Set the output path to 'dist' directory
  },
};

