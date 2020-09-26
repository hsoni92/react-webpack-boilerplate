const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'build' ),
      filename: 'main.js',
      publicPath: '/',
   },
   resolve: {
      alias: {
        Images: path.resolve(__dirname, './src/Images')
      }
    },
   devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      host: '0.0.0.0',
      port: 9000,
      disableHostCheck: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                 loader: 'file-loader',
                 options: {
                   name: '[name].[ext]',
                   outputPath: 'fonts/'
                 }
              }
            ]
         },
         {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
     ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      }),
      new ErrorOverlayPlugin()
   ]
};