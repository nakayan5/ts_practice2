

function addAndHandle(n1: number, n2: number, cb: (num1: number) => void) {
    const result1 = n1 + n2;
    cb(result1)
}

addAndHandle(10, 20, (result1) => {console.log(result1)})