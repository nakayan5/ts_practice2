

// enum型

// 自動的に ADMINには1, READ_ONLYには2, AUTHORには3という数値が割り当てられる
enum Role {
    ADMIN, 
    READ_ONLY, 
    AUTHOR
}

const person1 = {
    name: 'naka',
    age: 30,
    hobbies: ['sports', 'cooling'],
    role: Role.ADMIN,
}

if (person1.role === Role.ADMIN) {
    console.log("correct");
}




const person2 = {
    name: 'naka',
    age: 30,
    hobbies: ['sports', 'cooling'],
    role: "read only user",
}
//　下期ではroleの値を覚えておく必要があり、大規模開発では不向き
if (person2.role === "read only user") {
    console.log("correct");
}

