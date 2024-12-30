// function makeCounter() {   //-----------1
// let currentCount = 1;
// return function() {
//     return currentCount++; // (*)
//     };
// }

// let counter = makeCounter();
// alert(counter() ); // ?
// alert(counter() ); // ?
// alert(counter() ); // ?
// let counter2 = makeCounter(); 
// alert( counter2() ); // ?

let currentCount = 1;
function makeCounter() { 
    return function() {
        return currentCount++;
    };
}

let counter = makeCounter(); 
let counter2 = makeCounter();

alert(counter() ); // ? 
alert(counter() ); // ?

alert(counter2() ); // ? 
alert(counter2() ); // ?

function calculate(a) {                     //------------------2
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}
console.log(calculate(1)(2)(3));

let cal1 = calculate(1);
let cal2 = cal1(2);
let result = cal2(3);
console.log(result);

function rebro(rebro) {      
    return (w, h) => {
        return rebro * w * h;
    }
}

let V = rebro(5);
console.log(V(3, 4));
console.log(V(2, 4));
console.log(V(1, 5));

// function* moving() {          //------------------------3
//     let x = 0;
//     let y = 0;

//     while (true) {
//         let direction = yield;
//         if (direction === 'left') x -= 10;
//         else if (direction === 'right') x += 10;
//         else if (direction === 'up') y += 10;
//         else if (direction === 'down') y -= 10;
//         console.log(`Координаты объекта: ${x}, ${y}`);
//     }
// }

// let mover = moving();
// mover.next();

// let interval = setInterval(function() {
//     let direction = prompt("Введите команду (left, right, up, down) для движения или stop для остановки:");
//     if (direction === "stop") {
//         clearInterval(interval);
//     } else {
//         mover.next(direction);
//     }
// }, 1000);

window.global = 'строка';
window.new_global = 99;

console.log(global);
console.log(new_global);
for (let key in window) {      //------------------------4
    if (window.hasOwnProperty(key)) {
        console.log(`${key}: ${window[key]}`);
    }
}
