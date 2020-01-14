module.exports = {
  //Tell webpack to run babel on every file it runs through
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
