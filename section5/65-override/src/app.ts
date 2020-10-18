
// ベースクラス
class Department {
    // private employees: string[] = [];
    // 上記ではAccountingDepartmentからアクセスできない
    // 基本外部からのアクセスはできないが継承したサブクラスからのアクセスはできる
    protected employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.id = id;
        // this.name = name;
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



// ITDepartmentクラス
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;  //naka
    }
}

const it =  new ITDepartment('d1', ['naka']);
it.addEmployee('naka')
it.addEmployee('tomo')

// AccountingDepartmentクラス
class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports);
    }

    // オーバーライド
    addEmployee(name: string) {
        if (name === 'naka') {
            return;
        }
        this.employees.push(name)
    }
}

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('something');
accounting.printReports();