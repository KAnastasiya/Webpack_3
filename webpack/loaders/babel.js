const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = function () {
  return {
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }],
            ],
            plugins: [
              transformObjectRestSpread,
            ],
          },
        }],
      }],
    },
  };
};
