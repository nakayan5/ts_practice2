

function add(n1: number, n2: number): number {
    return n1 + n2;
}

// printResultの戻り値も型は型推論でvoidになる
// voidは何も返さないという型
function printResult(num: number) {
    console.log(num);
}

// undefinedはreturn文を返さないといけない
// function printResult(num: number): undefined {
//     console.log(num);
//     return;
// }

printResult((add(5, 12)))