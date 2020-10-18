

// tuple型
const person: {role: [number, string]} = {
    role: [2, 'author'],
}

person.role = [0, 'admin', 4]
//　3つ目は定義していなのでエラーになる