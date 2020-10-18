
// ベースクラス
class Department {
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
// getter&setter
// 特別なロジックをプロパティの中にカプセル化して、そのプロパティを取得したり設定したりする時にその処理が実行されるようにする
// getter 値を取得するメソッド
// 必ず何かを返さないといけない
// setterには引数がいる
class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('error')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('error')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports);
    }

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