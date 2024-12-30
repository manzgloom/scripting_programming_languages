function basicOperation (operation, value1, value2) {
    if (operation == '+') {
        return value1 + value2;
    } else if (operation =='-') {
        return value1 - value2;
    } else if (operation == '*') {
        return value1 * value2;
    } else if (operation == '/') {
        return value1 / value2;
    }
}
let result1 = basicOperation('+', 5, 10);
console.log(result1);
let result2 = basicOperation('-', 6, 10);
console.log(result2);
let result3 = basicOperation('*', 7, 10);
console.log(result3);
let result4 = basicOperation('/', 8, 10);
console.log(result4);

function summaCubs(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 3; 
    }
    return sum;
}
let result5 = summaCubs(2);
console.log(result5);
let result6 = summaCubs(3);
console.log(result6);

function average(mass) {
    let average = 0;
    let k = 0;
    for (let i = 0; i < mass.length; i++) {
        average += mass[i];
        k++;
      }   
    return average/k;
}
let mass = [1, 3, 5, 7, 9, 12];
console.log(average(mass));

let reverse = (str) => {
    let reverseStr = str.split('').reverse().join('');
    let normalStr = reverseStr.replace(/[^a-zA-Z]/g, '');
    return normalStr;
}
let str = "Java123 #Script";
let new_str = reverse(str);
console.log(new_str); 

function lotOfStr (str, n) {
    let new_str = "";
    for (let i = 0; i < n; i++) {
        new_str += str;
    }
    return new_str;
}
let string = "two";
let n = 5;
console.log(lotOfStr(string, n))

function new_mass(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}
const arr1 = ["first", "second", "third", "fourth"];
const arr2 = ["first", "fourth"];
const arr3 = new_mass(arr1, arr2);
console.log(arr3);

let sum = function(massiv) {
    let sum = 0;
    for ( let i=0; i<massiv.length; i++) {
        sum+=massiv[i];
    }
    return sum;
}
let massiv = [1, 2, 3, 4];
console.log(sum(massiv));