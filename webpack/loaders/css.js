module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
      ],
    },
  };
};
