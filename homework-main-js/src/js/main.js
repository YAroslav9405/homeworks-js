let userName = prompt('Введіть ім`я користувача:');
alert('Привіт' + ' ' + userName + '!');

const date = new Date();
let age = prompt ('Вкажіть свій рік народження:');
let num  = parseInt(age);
let userAge = date.getFullYear() - num;
let ageString = userAge + '';
alert('Вам' + ' ' + ageString + ' ' + 'років!');

let side = prompt ('Вкажіть довджину сторони квадрата в сантиметрах:');
let size  = parseInt(side);
let lengthSquare = 4  * size;
let squareString = lengthSquare + '';
alert('Периметр квадрата = ' + squareString + ' ' + 'см');

let radius = prompt ('Вкажіть радіус кола в сантиметрах:');
let radiusSize  = parseInt(radius);
let circleSquare = 3.14  * Math.pow(radiusSize, 2);
let circleString = circleSquare.toFixed(2) + '';
alert('Площа кола = ' + circleString + ' ' +'см2');

let distance = prompt ('Вкажіть відстань в кілометрах між містами:');
let time = prompt ('Вкажіть бажаний час подорожі в годинах:');
let distanceNum = parseInt(distance);
let timeNum = parseInt(time);
let speed = distanceNum / timeNum;
let speedRound = Math.round(speed);
let speedString = speedRound + '';
alert('Вам необхідно рухатись зі швидкістю' + ' ' + speedString + ' ' + 'км/год');

let dollar = prompt ('Вкажіть суму в доларах:');
let dollarNum = parseInt(dollar);
const euro = dollar * 0.94;
let euroRound = Math.round(euro);
let euroString = euroRound + '';
alert('Ви отримаєте' + ' ' + euroString + ' ' + 'EUR');
