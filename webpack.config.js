var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
     entry: './index.js',
    output: {
       path: __dirname + '/app',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
};