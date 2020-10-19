
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports  =  {
    mode: 'production',  // webpackがコードを最適化する
    entry: './src/app.ts',   
    output: {
        filename: ' bundle.js',
        path:  path.resolve(__dirname, 'dist'),
        // publicPath: 'dist'は削除
    },
    devtool: 'none',　// 本番環境ではsourceMapは必要ない
    module: {
        rules: [
            {
                test: /\.ts?/,
                use: 'ts-loader',
                exclude: /node_modules/
            }        
        ]
    },
    resolve: {
        extentions: ['.ts', '.js']
    },
    // ここでプラグインはプロジェクト全体に適用される　// modules&rulesはファイル単位で適用される
    plugins: [
        // webpackの出力ファイルを作成する前にdistフォルダの中身をclearするプラグイン
        // コンストラクタ関数のためnewでインスタンスを作る
        new CleanPlugin.CleanWebpackPlugin(),
    ]
}

// package.json
// 最後に "build": "webpack --config webpack.config.prod.js"に変更。