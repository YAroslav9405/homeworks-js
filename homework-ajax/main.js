let dataItem = [];
let filterArr = [];
let modal = document.querySelector('.modal');
let productInfo = document.querySelector('.product-info');
let wraper = document.querySelector('.wraper');



const container = document.querySelector('.container');
const filterList = document.querySelector('.filter-list');
filterList.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if(item) {
        filter(item);
    }
});

container.addEventListener('click', (event) => {
    
    const block = event.target.closest('.product-block');
    
    if(block) {
        
        fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
       
        dataItem = data.products;
        for (i=0; i<dataItem.length; i++) {
            if(dataItem[i].id == block.dataset.id ) {
                modal.classList.add('active');
                if (modal.classList.contains('active')) {
                    wraper.classList.add('open');
                };
                const product = `
                <div class="product-block" data-id="${dataItem[i].id}">
                    <div class="info">
                        <span class="category">${dataItem[i].category}</span>
                        <h3>${dataItem[i].brand}</h3>
                        <strong>${dataItem[i].price}</strong>
                    </div>
                </div>
            `;
            productInfo.insertAdjacentHTML('beforeend', product);}
            
            }
          
})
        }
       
    })

load();

function load() {
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
        dataItem = data.products;
        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
            
        });
        let list = [];

        const tempArray = filterArr.sort();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i + 1] !== tempArray[i]) {
                list.push(tempArray[i]);
            }
        }

        list.map((list) => {
            const listItem = `<li>${list}</li>`;
            filterList.insertAdjacentHTML('beforeend', listItem);
        });
    }).catch((error) => console.log(error));
}

function filter(item) {
    const cat = item.textContent;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    if (cat != 'all') {
        dataItem.map((item) => {
            if (item.category == cat) {
                const product = `
                <div class="product-block" data-id="${item.id}>
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
                container.insertAdjacentHTML('beforeend', product);
            flag = false;
            
            }
        });
    } else {
        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block" data-id="${item.id}>
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
    }
}



function modalClose() {
    let close = document.querySelector('.close');
    close.addEventListener('click' , () => {
        if (modal.classList.contains('active')) {
            wraper.classList.remove('open');
        };
        modal.classList.remove('active');
        while (productInfo.firstChild) {
            productInfo.removeChild(productInfo.firstChild);
        }
    })
    
}
modalClose();


