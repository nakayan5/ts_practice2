
// WebpackはNode.jsを使用し、このファイルを実行する

const path = require('path');

module.exports = {
  mode: 'development',  // ミニファイなどの最適化が行われない=>開発時デバッグがしやすくなる&分かりやすいエラーメッセージが表示されるようになる
  // パスの指定
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // 絶対パスで指定する // __dirnameはNode.jsの環境でグローバルに使える定数
    publicPath: 'dist'   //webpackの出力先を参照するパスをサーバーのルートから相対パスで指定する
  },
  devtool: 'inline-source-map',
  // TypeScriptのファイルをどのように処理するかを設定する
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extentions: ['.ts', '.js']
  }
};
