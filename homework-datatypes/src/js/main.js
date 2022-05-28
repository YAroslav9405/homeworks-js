let a = 0.1;
let b = 0.2;
let c = a + b;
alert('0.1 + 0.2 = ' + c.toFixed(1));

let string = '1';
let toNum = parseInt(string);
let num = 2;
let result = toNum + num;
alert('1+2 = ' + result);

const memory = prompt('Вкажіть обсяг флешки в Гб:');
const mb = memory * 1000;
let answer = mb / 820;
alert(parseInt(answer) + ' файлів поміщається на флешку');

const money = prompt('Введіть суму грошей в гаманці:');
const prise = prompt('Ввведіть вартість однієї шоколадки');
let chocolate = money / prise;
let rem = money % prise;
alert('Ви можете купити ' + parseInt(chocolate) + ' шоколадок. ' + 'Ваша решта : ' + rem );

const number = prompt('Введіть трьохзначне число:');
let newNum = number / 10;
let revNum = number % 10;
let stringNum = revNum + '';
let revNew = parseInt(newNum) % 10;
let stringNew = revNew + '';
let endNum = parseInt(newNum) / 10;
let stringEnd = parseInt(endNum) + '';
alert(stringNum + stringNew + stringEnd);

const bank = prompt('Введіть суму вкалду в USD:');
let yearMoney = (bank * 5) / 100;
let twoMonths = (2 * yearMoney) / 12;
alert('Сума нарахованих відсотків за два місяці становить: ' + twoMonths.toFixed(2) + ' USD');

