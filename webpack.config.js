const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    pageOne: path.join(__dirname, './src/pages/pageOne/index.js'),
    pageTwo: path.join(__dirname, './src/pages/pageTwo/index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  },

  mode: 'production',

  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          // 只处理 node_modules 中的模块；去掉此配置表示处理所有模块（node_modules + 我们自己写的模块）
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minChunks: 2
        }
        // vendorsPageOne: {
        //   test: module => {
        //     return /react/.test(module.context)
        //   },
        //   chunks: 'initial',
        //   name: 'vendorsPageOne',
        //   priority: 10,
        // },
        // vendorsPageTwo: {
        //   test: module => {
        //     return /jquery/.test(module.context)
        //   },
        //   chunks: 'initial',
        //   name: 'vendorsPageTwo',
        //   priority: 10,
        // }
      }
    }
  },

  plugins: [new BundleAnalyzerPlugin(), new CleanWebpackPlugin()]
}
