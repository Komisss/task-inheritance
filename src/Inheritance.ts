interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(obj: IPersonData) {
        this._name = obj.name;
        this._secondName = obj.secondName;
        this._age = obj.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    constructor(obj: IStudentData) {
        super(obj);
        this._phone = obj.phone;
    }
    /**
     * Выводит объект с именем, фамилией, возрастом и номером телефона студента.
     * @returns {IStudentData} выводит объект с интерфейсом IstudentData
     */
    getData(): IStudentData {
        return { ...super.getData(), phone: this._phone };
    }
}
