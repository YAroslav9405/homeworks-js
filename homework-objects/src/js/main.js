
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
let time = distance/car.averageSpeed;
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
        case (time < 4 && age >=18 && distance <= trueDistance ):
            alert( 'Час в дорозі = ' + time );
        break;
        case (time > 4 && age >= 18 && distance <= trueDistance):
            time = time +1;
            alert( 'Час в дорозі = ' + time );
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


