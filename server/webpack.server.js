const path = require('path');
module.exports = {
  // Inform webpack that we're building a bundle for
  // nodeJs, rather than for the browser
  target: 'node',

  // Tell webapack the rootfile of application
  entry: './src/index.js',

  // Tell webpack where to put the output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  //Tell webpack to run babel on ever file it runs through
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0', // no longer needed for new webpack?
            ['env', { targets: ['last 2 versions'] }],
          ],
        },
      },
    ],
  },
};
