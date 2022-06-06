
//minimum

let car = {
    manufacturer: 'bmw',
    model: 'x5',
    modelYear: 2021,
    averageSpeed: 120,
    tankVolume: '83л',
    fuelConsumption: '12л на 100км',
    driverName: 'Ви не можете кервувати автомобілем',
    addFuel: 'Ви не можете заправити авто',
}


let age = +prompt('Вкажіть свій вік:');
let driver = prompt('Введіть ім*я водія:');
let fuelIncar = +prompt('Введіть залишок пальгого в баку:');
let newFuel = +prompt('Введіть скільки ви бажаєте залити топлива:');
let distance = +prompt('Введіть відстань яку ви хочете проїхати в км:');
let allFuel = fuelIncar + newFuel;
let timeRoad = distance/car.averageSpeed;
let trueDistance = (allFuel * 100)/12;




function addDriver() {
    if ( age >= 18 ) {
        car.driverName = driver;
        
    } else {
        alert('Водія не додано!');
    };
}

addDriver();


function fuel() {
    if ( allFuel  <= 83  ) {
        car.addFuel = allFuel;

    } else {
        alert('Об*єм палива , яке Ви хочете заправити не поміститься Вам в бак!');
    };
}

fuel();

function timeRoute() {
    switch(true) {
        case (timeRoad < 4 && age >=18 && distance <= trueDistance ):
            alert( 'Час в дорозі = ' + timeRoad );
        break;
        case (timeRoad > 4 && age >= 18 && distance <= trueDistance):
            timeRoad = timeRoad +1;
            alert( 'Час в дорозі = ' + timeRoad );
        break;
        case (distance > trueDistance):
            alert('Палива не вистачить, заправте авто');
        break;
        default: alert('Ви не можете керувати авто!')
        
    }
}

timeRoute();



function showInfo() {
    for( let param in car) {
        console.log(`${param} - ${car[param]}`);
    };
}

showInfo();



//norma


let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

let time = {
    hour: h,
    minutes: m,
    seconds: s,
}

let addHours = +prompt('Введіть кількіст годин:');
let addMinutes = +prompt('Введіть кількість хвилин');
let addSeconds = +prompt('Введіть кількість секунд');
let newHour = date.getHours() + addHours;
let newMinute = date.getMinutes() + addMinutes;
let newSecond = date.getSeconds() + addSeconds;

function addTime() {
    switch(true) {
        case( newHour >23 ):
            time.hour =  newHour - 24;
            if(newMinute >59 ) {
                time.hour = time.hour  + 1;
                time.minutes = newMinute - 60;
                createTime();
            } else {
                time.minutes = newMinute;
                createTime();
            }
        break;
        case( newHour < 23 ):
            time.hour =  newHour ;
            if(newMinute >59 ) {
                time.hour = time.hour  + 1;
                time.minutes = newMinute - 60;
                createTime();
            } else {
                time.minutes = newMinute;
                createTime();
            }
        break;
        default: ;
       
    }
}

function createTime() {
    if( newSecond >59 ) {
        time.minutes = time.minutes  + 1;
        time.seconds = newSecond - 60;
    } else {
        time.seconds = newSecond;
    }
}

addTime();

function showTime() {
    for( let param in time) {
        console.log(`${param} - ${time[param]}`);
    };
}

showTime();




//maximum


function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}

let firstNumber = Fraction(6,10);
let secondNumber = Fraction(2,10);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    alert(` Результат множення ${obj1.upNumber}/${obj1.downNumber} * ${obj2.upNumber}/${obj2.downNumber}  = ${resultUpNumber}/${resultDownNumber}`);
}

multiFraction(firstNumber,secondNumber);

function devide(obj1,obj2){
    let devideUpNumber = obj1.upNumber / obj2.upNumber;
    let devideDownNumber = obj1.downNumber / obj2.downNumber;
    alert(` Результат ділення  ${obj1.upNumber}/${obj1.downNumber} / ${obj2.upNumber}/${obj2.downNumber}   = ${devideUpNumber}/${devideDownNumber}`);
}

devide(firstNumber,secondNumber);

function minus(obj1,obj2){
    let minusUpNumber = obj1.upNumber - obj2.upNumber;
    let minusDownNumber = obj1.downNumber;
    alert(` Результат віднімання   ${obj1.upNumber}/${obj1.downNumber} - ${obj2.upNumber}/${obj2.downNumber}  = ${minusUpNumber}/${minusDownNumber}`);
}

minus(firstNumber,secondNumber);

function plus(obj1,obj2){
    let plusUpNumber = obj1.upNumber + obj2.upNumber;
    let plusDownNumber = obj1.downNumber;
    alert(` Результат додавання   ${obj1.upNumber}/${obj1.downNumber} + ${obj2.upNumber}/${obj2.downNumber}  = ${plusUpNumber}/${plusDownNumber}`);
}

plus(firstNumber,secondNumber);

