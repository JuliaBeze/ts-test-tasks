
let age: number = 10;
let firstName: string = 'Dimych';
let isMentor: boolean = true;
let ages: Array<number> = [18, 12, 19, 22, 45];
let ages1: (number | string | boolean | null)[] = [18, 12, 19, true, '45'];


interface IMan {
    name:string;
    height:number;
    isMarried?:true;
}
let man1 : IMan = {name:"ddd",height:12312};
let man2 : IMan = { name: 'Sasha', height: 1.8 };


interface ICar {
    model:string;
    year:number;
}
//let car: ICar ={model: 'Reno Stepway', year: 2016 };


//Создайте массив (и явно типизируйте его), в котором будут сидеть 2 элемента man1 и man2
interface ITask {
    id:number;
    title:string;
}
let tasks: ITask[] = [{id:1,title:"ss"},{id:2,title:"ss"}];
let people1:Array<IMan> = [man1,man2];

//Добавьте явную типизацию для параметров и результирующего значения функции
// (функция имьютабельно превращает все строки из входящего массива в верхний регистр):


//в функции типизируем что приходит и что функция возвращает
//если фунция ничего не возвращает записываем void

function toUpperCase(strings: string[]): string[]{
    let result = strings.map(s => s.toUpperCase());
    return result;
}



//Добавьте строгую типизацию функции, используя те интерфейсы, которые у вас есть:
interface IMan {
    name:string;
    height:number;
    isMarried?:true;
}

    let createMan = (name:string, height:number) :IMan => {
        return {
            name,
            height
        };
    };



//Расширить интерфейс ICar, чтобы компилятор не ругался:

interface ICar {
    model: string;
    year: number;
    on:boolean;
    turnOn: ()=> void;
    rename:(model:string)=>void;
}


let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
};

//Создайте interface IGarage и типизируйте этот кусок кода:(используя те интерфейсы, которые у вас есть)

export interface IGarage {
    addCar:(car:ICar)=>void;
    logAllCarsNames:()=>void;
    getAllCars:()=> ICar[]
}

export  let createGarage = ():IGarage => {
    let _cars:ICar[] = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
};



//Создайте класс Car, который будем использовать для создания машинок
// (в параметрах конструктор будет принимать модель и год)
// и добавьте в него свойства и методы которые описаны в интерфейсе ICar

export class Car {
    model:string;
    year:number;
    on = false;

    constructor(model:string,year:number) {
        this.model = model;
        this.year = year;
    }
    turnOn():void {
        this.on = true;
    }
    rename(model:string):void {
        this.model = model;
    }
}
//
let car1 = new Car('dd',2020)
// constructor(public model:string,public year:number){} тоже самое


export default 15;