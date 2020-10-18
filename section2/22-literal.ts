
// literal
// number or string を指定するものではなく、値そのものを指定する
// resultconversion: string では呼出し元からどんな文字列を指定すればと分からない問題がある

function combine(
    input1: number | string, 
    input2: number | string, 
    // resultconversion: string,
    resultconversion: 'as-number' | 'as-text',　　// unionとliteralの組み合わせ
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