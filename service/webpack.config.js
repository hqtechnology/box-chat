var path = require('path');

module.exports = {
  entry: { ui: ['./src/main/js/index.js'] },
  devtool: 'sourcemaps',
  cache: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'src/main/resources/static/box_chat'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      root: __dirname,
      src: path.resolve(__dirname, 'src/main/js/webapp'),
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
};
