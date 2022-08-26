import * as path from 'path'
import { Configuration } from 'webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration & { devServer: any } = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js'
  },
  devServer: {
    compress: true,
    port: 3000
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    })
  ]
}

export default config
