const path = require('path')

const outputPath = path.resolve(__dirname, 'dist') // resolve：絶対パスを生成する
console.log({outputPath})

module.exports = {
  entry: './src/index.js', // webpackのエントリーポイントを設定できる。バンドル対象を設定できる
  output: {                // どこに出力するのか設定する。絶対パスで設定する必要がある
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath // Document Rootの設定
  }
}
