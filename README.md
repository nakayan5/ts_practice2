# ts_practice2

## 1. TypeScriptとは
・JavaScriptの上位互換</br>
・JavaScriptの仕様をベースに拡張したプログラミング言語</br>
・新しい機能と利便性をJavaScriptに追加</br>
・ブラウザでもNode.jsでも直接実行できない</br>

## 2. 環境構築
インストール</br>
`$ npm install -g typescript`</br>
`$ npm init`</br>
`$ npm install --save-dev lite-server`</br>
`"start": "lite-server"`</br>
コンパイル</br>
`tsc ファイル名`</br>
`tsc ファイル名 --watch`</br>
`tsc --init`</br>
=> tsconfig.jsonが作成される</br>
TypeScriptがJavaScriptにどのようにコンパイルされるかを設定するファイル

## 3. WebpackとTypeScript
Webpackとはモジュールバンドラおよびビルドツール  

### ■Webpackのメリット
・機能ごとにファイルを分割できる  
=> 可読性が向上する＆開発作業の分担やテストがしやすくなる＆名前空間を生成できる＆モジュールの保守性を高められる  
・リクエスト数を減らせる  
・依存関係を解決したファイルを出力できる  
・最適化したファイルを出力できる = ファイルサイズを減らせる  

### ■ローダー
主にJavaScript以外のファイル(CSSや画像など)をバンドルできるように変換するプログラムのこと  

### ■Webpack のインストール & 重要な依存パッケージ
`$ npm  install --save-dev  webpack  webpack-cli  webpack-dev-server  typescript  ts-loader`<br/>
・webpack<br/>
= 複数のファイルをまとめることができ、かつコードを変換できる<br/>

・webpack-cli <br/>
= webpackのコマンドをプロジェクトで実行するために必要<br/>

・webpack-dev-server<br/>
= 開発用のWEBサーバー。裏でwebpackを実行しファイルの変更を監視する<br/>

・ts-loader<br/>
= webpckがTypeScriptをJavaScriptに変換するために必要<br/>
= コンパイルできる

### ■エントリポイントと出力設定
tsconfig.jsonと同階層にwebpack.config.jsを作成。filenameは自由に決めることができる。
pathは出力先のフォルダ名でtsconfig.jsonのoutFileと同じにする必要がある。ただし、相対パスではなく絶対パスで記述する。
requireはNode.jsでモジュールもimportするための構文。
'path'というモジュールはパッケージとしてインストールする必要はない。なぜならNode.jsのコアモジュールだから。
testはwebpackが見つけた全てのファイルに対して実行されるファイル名のテスト。このルールを適用するかどうかをファイル名でチェックする。tsで終わる拡張子のファイルはts-loaderを使う。<br/>
`const  pth = require('path')              
module.exports  =  {  
    entry:  './src/app.ts',  
    output: {  
        filename: 'bundle.js'  
        path:  path.resolve(__dirname, 'dist')  
    },  
    module: {  
        rules: [  
            {  
               test: /\.ts?/,  
               use: 'ts-loader',  
               exclude: /node_modules/  
            }  
        ]  
    },  
    resolve: {}  
}`  

### ■ts-loaderの利用（TypeScriptサポートの追加）
tsconfig.jsonのsourceMapをtrueにする。<br/>
webpack.config.js内にdevtool: 'inline-source-map'を追加する。<br/>
そうすることでwebpackでもsourceMapが使用でき、生成されるバンドルファイルのソースマップとリンクさせる。<br/>
package.jsonのscripts内に "build":  "webpack"と記述する。<br/>
"start":  "webpack-dev-server"<br/>
mode: 'development'を追加することで、分かりやすいエラーメッセージになる。<br/>
`mode:  'development'`       <br/>
`enrty: {}`                  <br/>
`output:  {`                 <br/>
    `filename:`              <br/>
    `path:`                  <br/>
    `publicPath: '_dist_',`    <br/>
`}`



### ■本番用のワークフロー設定
webpack.config.prod.jsファイルを作成。<br/>
`npm install --save-dev clean-webpack-plugin`  
"build": "webpack --config webpack.config.prod.js"に変更。<br/>


## 4. 環境構築 React with TypeScript
`$ npx create-react-app プロジェクト名 --template typescript`</br>
$ npm start を実行するとTypeScriptとJSXがJavaScriptにコンパイルされる</br>

### ■TypeScriptでエラーが出た時や自動補完ができないパッケージの場合</br>
`$ npm install --save-dev @types/パッケージ名`</br>
