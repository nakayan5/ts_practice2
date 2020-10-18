
// never


// この関数は絶対戻り値を返さない
// void型でもありnever型でもある
// neverと明示的に記述することでこの関数は戻り値を返さないと示すことができる
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

const result = generateError('error', 500)
console.log(result);
// => errorがtwrowされているためundefinedが表示されない
