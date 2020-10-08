module.exports = {
  entry: './index.web.js',
  output: {
    filename: 'public/js/script.js',
    sourceMapFilename: 'public/js/script.map',
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
