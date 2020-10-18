
//　unknown
// どんな型になるか分からないことを意味する


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'naka';

//　下記はエラーになる
// userInputがstring型であると保証されていないから
// userInputがany型であるならばエラーにならない　anyは型チェックしないから
userName = userInput;

// 下記であればエラーにならない
if (typeof userInput === 'string') {
    userName = userInput
}