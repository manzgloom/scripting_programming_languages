function create(array) {
    return array.reduce((massiv, current) => {
        if (Array.isArray(current)) {
            return massiv.concat(create(current));
        } else {
            return massiv.concat(current);
        }
    }, []);
}
const array = [1, [1, 2, [3, 4]], [2, 4]];
let new_arr = create(array);
console.log(new_arr);

function summa(array) {
    return array.reduce((sum, current) => {
        if (Array.isArray(current)) {
            return sum + summa(current);
        } else {
            return sum + current;
        }
    }, 0);
}
const array1 = [1, [1, 2, [3, 4]], [2, 4]];
let sum = summa(array1);
console.log(sum);

function showObject(array) {
    let new_students = {};
    array.forEach(student => {
        if (student.age > 17) { 
            if (!new_students[student.groupId]) {
                new_students[student.groupId] = [];
            }
            new_students[student.groupId].push(student);
        }
    });
    return new_students;
}

// 1 : [{Alex, 18, 1}];
// 2 : [{Olga, 24, 2} , {Andrew, 27, 2}]

const students = [
    {name: "Alex", age: 18, groupId: 1}, 
    {name: "Olga", age: 24, groupId: 2},
    {name: "Mila", age: 16, groupId: 1},
    {name: "Max", age: 15, groupId: 2},
    {name: "Andrew", age: 27, groupId: 2},
]
console.log(showObject(students));

function newString(string) {
    let total1 = '';
    let total2;
    for (let symbol of string) {
        total1 += symbol.charCodeAt(0);
    };
    console.log(total1);
    total2 = total1.replace(/7/g, '1');
    console.log(total2);
    return total1 - total2;
}
let str = "BCD";
console.log(newString(str));

function newObject(...objects) {
    return Object.assign({}, ...objects);
}
let obj1 = {a: 1, b: 2};
let obj2 ={c: 3};
let obj3 ={d: 4};
let obj4 ={a: 3, c: 3};
for(let item in obj4) {
    console.log(obj4[item]);
}
console.log(obj4.a);
console.log(newObject(obj1, obj2)); 
console.log(newObject(obj1, obj2, obj3)); 
console.log(newObject(obj1, obj4)); 

function createTower(levels) {
    let tower = [];
    for (let i = 0; i < levels; i++) {
        let space = ' '.repeat(levels - i - 1);
        let stars = '*'.repeat(2 * i + 1);
        tower.push(space + stars);
    }
    return tower;
}
let levels = prompt("Введите число этажей:");
let tower = createTower(levels);
console.log(tower);