class Circle {
    constructor(radius, diametr) {
        this.radius = radius;
        this.diametr = diametr;
        this.square = null;
        this.lenght = null;
    }

    get circlRad() {
        return this.radius;
    }


    get diam() {
        return this.diametr;
    }

    mathSquare() {
        return this.square = Math.PI * Math.pow(this.radius, 2);
        
    }

    mathLenght() {
        return this.lenght = 2 * Math.PI * this.radius;
        
    }

}


let num = new Circle (5, 10);
console.log(num);
console.log( 'Площа кола = ' + num.mathSquare().toFixed(2));
console.log('Довжина кола = ' + num.mathLenght().toFixed(2));


class Marker {
    constructor(color, percentInk, ink ) {
        this.color = color;
        this.percentInk = percentInk;
        this.ink = ink;
    }

    inkNum () {
        let newInk= (this.ink).split(' ').join('');
        let symbol = newInk.length * 0.5;
        
        if ( symbol > this.percentInk ) {
            console.log('Закінчилось чорнило!');
        } else {
            console.log(this.ink);
        }
       
    }

}

let newMarker = new Marker('green', 5, prompt('Введіть текст:'));
console.log(newMarker);

console.log(newMarker.inkNum());




