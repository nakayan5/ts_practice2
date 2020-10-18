


class Department {
    name: string;
    // privateを付けた変数や関数はそのクラス内部のみでしかアクセスできない
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
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

const accounting =  new Department('accounting');

accounting.addEmployee('naka')
accounting.addEmployee('tomo')

accounting.employees[2] = 'sere'　// error
// employeesはprivate修飾を受けているので外部からはアクセスできない
// TypeScriptはコンパイル上のみチェックをし、ランタイムではチェックしない

accounting.describe();

