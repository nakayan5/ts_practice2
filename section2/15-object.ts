

const person: {name: string; age: number;} = {
    name: 'yota',
    age: 24,
}
// 型推論が正しく動作する場合、上記のように型を明示的に書く必要はない

const person = {
    name: 'yota',
    age: 24,
}

console.log(person);
