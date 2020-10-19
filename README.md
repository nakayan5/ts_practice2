# ts_practice2

### TypeScriptとは
・JavaScriptの上位互換</br>
・JavaScriptの仕様をベースに拡張したプログラミング言語</br>
・新しい機能と利便性をJavaScriptに追加</br>
・ブラウザでもNode.jsでも直接実行できない</br>

### 環境構築
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

### 環境構築 React with TypeScript
`$ npx create-react-app プロジェクト名 --template typescript`</br>
$ npm start を実行するとTypeScriptとJSXがJavaScriptにコンパイルされる</br>

### TypeScriptでエラーが出た時や自動補完ができないパッケージの場合</br>
`$ npm install --save-dev @types/パッケージ名`</br>
