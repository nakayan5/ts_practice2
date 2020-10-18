

function add(n1: number, n2: number): number {
    return n1 + n2;
}


function printResult(num: number) {
    console.log(num);
}


// let combineValues: Function;
// 上記では不十分
// 定義した型を持たない関数はエラーになる ex) printResult
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
combineValues(8, 8)

printResult((add(5, 12)))