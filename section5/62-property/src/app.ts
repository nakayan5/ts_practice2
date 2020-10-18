


class Department {
    // private id: string;
    // name: string;
    private employees: string[] = [];

    // constructor(n: string) {
    //     this.name = n;
    // }

    
    // プロパティの定義を省略可できる
    constructor(private id: string, public name: string) {
        this.id = id;
        this.name = name;
    }

    describe(this: Department) {
        console.log('department' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);   
    }
}

const accounting =  new Department('d1', 'accounting');

accounting.addEmployee('naka')
accounting.addEmployee('tomo')

accounting.employees[2] = 'sere'　// error
accounting.describe();

