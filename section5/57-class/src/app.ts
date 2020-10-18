
// クラスはオブジェクトではない
// thisはその関数を呼び出す責任があるオブジェクトを参照する

class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    // this: Department
    // describeが実行されたときこのthisは常にDepartmentクラスをベースにしたインスタンスを参照する必要があることを意味する
    describe(this: Department) {
        console.log('department' + this.name);
    }
}

// クラスをnewで実行するとその時点でconstructorが呼ばれる
const accounting =  new Department('accounting');
accounting.describe();

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // error
// accountingCopyはDepartmentのインスタンスではないからエラーになる