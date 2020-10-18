

let lists: string[];
lists = ['name', 'age']
//　ここに数値を入れるとエラーになる
// 解決策の1つは配列のタイプをany型にする

for (const list of lists) {
    console.log(list.toUpperCase());
}