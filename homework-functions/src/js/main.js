// minimum

//1.

function test() {
    console.log('Тест успішний!');
};

test();

let test2 = function () {
    console.log('І цей теж!'); 
};

test2();

let test3 = () => {
    console.log('І це теж працює!')
};

test3();

//2.


function num(a,b,c,d) {};

alert('Кількість аргументів функції = ' + num.length);

//3.


let firstNum = +prompt('Введіть перше число: ');
let secondNum = +prompt('Введіть друге число: ');

function numbers () {
    switch(true) {
        case ( firstNum < secondNum) : 
            alert('-1');
        break;
        case ( firstNum > secondNum ) :
            alert('1');
        break;
        default: alert('0');
    };
};

numbers();


//4.

let n = +prompt('Введіть число: ');

function factorial(n) {
    switch(true) {
        
        case ( n!=1 && n!=0):
            n = n * (factorial(n-1));
        break;

        default: n=1;
    }
    return n;
}

alert('Факторіал числа ' + n + ' = ' + factorial(n));


//5.

let a = prompt('Введіть першу цифру: ');
let b = prompt('Введіть другу цифру: ');
let c = prompt('Введіть третю цифру: ');
let answer;

function oneNum (a,b,c) {
    answer =  a + b + c;
    alert(answer);
}

oneNum(a,b,c);



//6.

let length = +prompt('Введіть довжину прямокутника в см:');
let width = +prompt('Введіть ширину прямокутника в см:');
let area;

function mathArea (length,width) {
    switch(true) {
        case (length == 0) :
            area = width * width;
           
        break;
        case (width == 0) :
            area = length * length;
            
        break;
        default: area = length * width;
        
    }
    return area;
}

alert( 'Площа = ' + mathArea(length,width) + ' см2');


// norma

//1.


let setNum = +prompt("Введіть число:");
sum = 0;

function trueNum (setNum) {
    for (let i=0; i<=setNum; i++) {
        if ( setNum%i==0 && i!=setNum ) {
            sum += i;
            }
    }
    if( sum== setNum) {
        alert('Це досконале число!');
    } else {
        alert('Це не досконале число!');
    }
}

trueNum(setNum);



  




