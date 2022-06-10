//minimum

let shopList = [ 
    { 
        name: 'kiwi', 
        number : (prodNum = +prompt('Введіть кількість:')), 
        buy: confirm('Підтвердіть чи куплений продукт:'), 
        price: ( prodPrice = +prompt('Введіть ціну за одницю товару')), 
        allprice: (prodNum*prodPrice) , 
    }, 
    { 
        name: 'orange', 
        number : (prodNum = +prompt('Введіть кількість:')), 
        buy: confirm('Підтвердіть чи куплений продукт:'), 
        price: ( prodPrice = +prompt('Введіть ціну за одницю товару')), 
        allprice: (prodNum*prodPrice) , 
    }, 
    { 
        name: 'apple', 
        number : (prodNum = +prompt('Введіть кількість:')), 
        buy: confirm('Підтвердіть чи куплений продукт:'), 
        price: ( prodPrice = +prompt('Введіть ціну за одницю товару')), 
        allprice: (prodNum*prodPrice) , 
    }, 
  
] 
 
let result = shopList.filter(shopList => shopList.buy == true);

function showTrue() {
    for(let i = 0; i<result.length; i++) {
        console.log('Не придбані продукти: ' + result[i].name);
    }
}
showTrue();

let resultFslse = shopList.filter(shopList => shopList.buy == false);

function showFalse() {
    for(let i = 0; i<resultFslse.length; i++) {
        console.log('Придбані продукти: ' + resultFslse[i].name);
    }
}

showFalse();

let newList = resultFslse.concat(result);

function showInfo() {
    for(let i = 0; i<newList.length; i++) {
        console.log(newList[i]);
    }
}

showInfo();



//norma

deletItem = prompt('Введіть назву продукту для видалення:');
 let withoutItem=[];

for (let i =0; i < newList.length; i++) {
   if (newList[i].name === deletItem) {
      newList.splice(i,1);
   } }
   
withoutItem = newList;

console.log(withoutItem);




newItem = prompt('Введіть новий продукт:');




for (let i =0; i < withoutItem.length; i++) {
   if (withoutItem[i].name == newItem ) {
      withoutItem[i].number = withoutItem[i].number +1;
      withoutItem[i].allprice = withoutItem[i].number * withoutItem[i].price;
      
   }        
   }
  
   console.log(withoutItem);


//maximum

   let sum= 0;

   for (let i =0; i < withoutItem.length; i++) {
    sum = sum + withoutItem[i].allprice;
   }
console.log('Загальна сумма = ' + sum);

let sumFalse = 0; 

for (let i =0; i < withoutItem.length; i++) {
    if( withoutItem[i].buy == false) {
        sumFalse = sumFalse + withoutItem[i].allprice;
    }
   }

console.log( 'Сума не придбаних продуктів = ' + sumFalse);

function sortByAllPrice (withoutItem) {
    withoutItem.sort((a,b) => a.allprice > b.allprice ? 1 : -1)
}
sortByAllPrice(withoutItem);


console.log(withoutItem);