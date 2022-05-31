const age = prompt('Вкажіть свій вік:');

switch(true){

    case( age > 0 && age <=11 ): alert('Дитина!');
    break;
    
    case( age >= 12 && age <=17 ): alert('Підліток!');
    break;

    case( age >= 18 && age <=59 ): alert('Дорослий!');
    break;

    case( age >= 60 && age <=110 ): alert('Пенсіонер!');
    break;

    case( age >=111 ): alert('Люди стільки не живуть!');
    break;

    
    case (isNaN(age) ): alert('Ви вказали некоректні дані!');
    break;

    case ( age === ''): alert('Ви нічого не ввели!');
    break;

    default: alert('Такого віку не існує!');
}


const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
let symbol = +prompt('Вкажіть цифру від 0 до 9');

for (let i = 0; i < 10; i++) {
    if (i == symbol) {
        alert('Спец символ числа = ' + symbols[i]);
    }
}

let x = +prompt("Введіть перше число діапазону:");
let y = +prompt("Введіть друге число діапазону:");
let sum = 0;

for (i = x; x<=y; x++) {
    if( x <= y ) 
    {
      sum += x;
    }
}
alert(sum);

let a = +prompt("Введіть перше число:");
let b = +prompt("Введіть друге число:");

while ( a != 0 && b!=0 ) {

    (a>b)  ? (a = a-b) : (b=b-a);
}

alert ('Найбільший спільний дільник = ' + a);

let c = +prompt("Введіть число:");

for (let i=0; i<=c; i++) {
  if ( c%i==0 ) {
      alert('Дільники = ' + i);
  }
}

let pal = prompt('Введіть п*ятизначне число:');

if ( (pal> 9999) && (pal<100000)) {
    b= pal /10000;
    b= Math.trunc(b);
    pal = pal% 10000;
    c = pal / 1000;
    c = Math.trunc(c);
    pal = pal%100;
    d = pal/10;
    d = Math.trunc(d);
    pal = pal%10;

     ( b == pal ) && ( c == d) ? alert('Це число паліндром!') : alert('Це число не паліндром!');
    
} else {
    alert ('Ви ввели не п*ятизначне число!');
};

const price = +prompt('Введіть суму покупки в USD:');

switch(true) {
    case ( price >= 200 && price <300 ): 
        alert('Сумма до оплати зі знижкою = ' + (price - (price*0.03)) + ' USD');
    break;

    case ( price >= 300 && price <500 ): 
        alert('Сумма до оплати зі знижкою = ' + (price - (price*0.05)) + ' USD');
    break;

    case ( price >= 500 ): 
        alert('Сумма до оплати зі знижкою = ' + (price - (price*0.07)) + ' USD');
    break;

    default: alert('Сумма до оплати  = ' + price + ' USD');
};

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (i=0; i<7; i++) {
    alert( 'Today is ' + weekDays[i] + '!');
} 

let numbers = [];

for (d=0; d<10; d++) {
    numbers[d] = prompt('Введіть 10 чисел');
}
let plus = 0;
let minus = 0;
let zero = 0;
let even = 0;
let add = 0;



for(i=0; i<10; i++) {
    switch(true) {
        case(numbers[i]>0):
        (plus=plus+1);
        break;

        case(numbers[i]<0):
        (minus=minus+1);
        break;

        default:
        (zero=zero+1);
    }

}
alert('Додатніх чисел - ' + plus);
alert('Від*ємних чисел - ' + minus);
alert('Нулів - ' + zero);


for(i=0; i<10; i++) {
    switch(true) {
        case(numbers[i]%2==0 && numbers[i]!=0):
        (even=even+1);
        break;

        case(numbers[i]%2!=0 && numbers[i]!=0):
        (add=add+1);
        break;

        default: 
    }

}
alert ('Парних чисел - ' + even);
alert ('Непарних чисел - ' + add);