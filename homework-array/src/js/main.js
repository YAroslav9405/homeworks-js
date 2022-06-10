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
        console.log('Придбані продукти: ' + result[i].name);
    }
}
showTrue();

let resultFslse = shopList.filter(shopList => shopList.buy == false);

function showFalse() {
    for(let i = 0; i<resultFslse.length; i++) {
        console.log('Ну придбані продукти: ' + resultFslse[i].name);
    }
}

showFalse();

function sortByBuy(shopList) {
    shopList.sort((a,b) => {
         return a.buy - b.buy;
    })
}
sortByBuy(shopList);
console.log(shopList);




//norma

deletItem = prompt('Введіть назву продукту для видалення:');
 let withoutItem=[];

for (let i =0; i < shopList.length; i++) {
   if (shopList[i].name === deletItem) {
      shopList.splice(i,1);
   } }
   
 withoutItem = shopList;

console.log(withoutItem);






let newItem = {
        name: prompt('Введіть назву продукту:'), 
        number : (prodNum = +prompt('Введіть кількість:')), 
        buy: confirm('Підтвердіть чи куплений продукт:'), 
        price: ( prodPrice = +prompt('Введіть ціну за одницю товару')), 
        allprice: (prodNum*prodPrice) ,
}

function addProduct() {
    let flag = false;
    for (let i =0; i < withoutItem.length; i++) {
        if (withoutItem[i].name == newItem.name ) {
           withoutItem[i].number = withoutItem[i].number +1;
           withoutItem[i].allprice = withoutItem[i].number * withoutItem[i].price;
           flag = true;
           break;
        }        
        }
        if(flag== false) {
            withoutItem.push(newItem);
        }
}

addProduct();
  
   console.log(withoutItem);


// maximum

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