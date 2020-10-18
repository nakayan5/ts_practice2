
// union and literal型は便利な一方、何度も同じ型を書くことは面倒
// 型の定義をコード内で再利用できる
// typeはJavaScriptにはなくTypeScript独自
type Combinable = number | string;
type ConversionDesriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable, 
    resultconversion: ConversionDesriptor,　
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultconversion === 'as-number') {
        return +result;
        // return parseFloat(result);
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges);

const combinedNames = combine('naka', 'tomo', 'as-text')
console.log(combinedNames);

