let playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];

    let ol = document.createElement('ol');
    let list = document.querySelector('.list');
    
    list.append(ol);

    for (var i = 0; i < playList.length; i++) {

      let li = document.createElement('li');
      let p = document.createElement('p');
      li.innerHTML = 'author: ' + playList[i].author;
      p.innerHTML = 'song: ' + playList[i].song;
      ol.appendChild(li);
      li.appendChild(p);
    };



let modal = document.querySelector('.modal');

function modalOpen() {
    modal.classList.add('active');
}

function modalClose() {
    modal.classList.remove('active');
}




let red = document.getElementById('red');
let orange = document.getElementById('orange');
let green = document.getElementById('green');

function swit() {
    switch(true) {
        case(red.classList.contains('red')) :
        red.classList.remove('red');
        orange.classList.add('orange');
        break;
        case(orange.classList.contains('orange')) :
        orange.classList.remove('orange');
        green.classList.add('green');
        break;
        case(green.classList.contains('green')) :
        green.classList.remove('green');
        red.classList.add('red');
        break;
        default: ;
    }
    
};