// task1

const divHolder = document.querySelector('.div-holder');

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'e' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        const divText = document.getElementById('js-keypress');
        const textArea = document.createElement('textarea');
        textArea.value = divText.textContent;
        textArea.id = 'new-text';
        divHolder.innerHTML = '';
        divHolder.appendChild(textArea);
    } 
    if(event.key === 'f' && (event.ctrlKey || event.metaKey)) {

        event.stopPropagation();
        event.preventDefault();
        const newText = document.getElementById('new-text');
        const textDiv = document.createElement('div');
        textDiv.textContent = newText.value;
        textDiv.id = 'js-keypress';
        divHolder.innerHTML = '';
        divHolder.appendChild(textDiv);
        
    } 
})





// task 2

let table = document.querySelector('.table');
let trs = document.querySelectorAll('.row');
let head = document.querySelector('.head');
let idNum = document.querySelector('.id');
let users = document.querySelector('.user-name');
let balance = document.querySelector('.balance');
let country = document.querySelector('.country');



idNum.addEventListener('click' , function() {
    let sorted = [...trs].sort(function(a,b) {
        return a.children[0].innerHTML - b.children[0].innerHTML
    })
    table.innerHTML = head.innerHTML + '';

    for(let tr of sorted) {
        table.appendChild(tr);
    }

})

users.addEventListener('click' , function() {
    let sorted = [...trs].sort(function(a,b) {
        return (a.children[1].innerHTML).localeCompare(b.children[1].innerHTML)
        
    })
    table.innerHTML = head.innerHTML + '';

    for(let tr of sorted) {
        table.appendChild(tr);
    }

})

country.addEventListener('click' , function() {
    let sorted = [...trs].sort(function(a,b) {
        return (a.children[2].innerHTML).localeCompare(b.children[2].innerHTML)
        
    })
    table.innerHTML = head.innerHTML + '';

    for(let tr of sorted) {
        table.appendChild(tr);
    }

})

balance.addEventListener('click' , function() {
    let sorted = [...trs].sort(function(a,b) {
        return a.children[3].innerHTML - b.children[3].innerHTML
    })
    table.innerHTML = head.innerHTML + '';

    for(let tr of sorted) {
        table.appendChild(tr);
    }

})
