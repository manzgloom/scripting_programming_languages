// let set = new Set();  //----------------------#1

// set.add("Яблоки");    
// set.add("Груши"); 
// set.add("Арбузы");  
// set.add("Персики");  
// set.add("Бананы");  
// console.log(set);

// add(set);
// deleting(set);
// check(set);
// amount(set);

// function add(set) {
//     let value = prompt("Введите добавляемое значение: ");
//     set.add(value);
// }
// function deleting(set) {
//     let value = prompt("Введите удаляемое значение: ");
//     set.delete(value);
// }
// function check(set) {
//     let value = prompt("Введите значение проверяемого товара: ");
//     if (set.has(value)) {
//         console.log("Товар в наличии");
//     } else {
//         console.log("Товар отсутствует");
//     }
// }
// function amount(set) {
//     console.log(`Количество товара: ${set.size}`);
// }


// let students = new Set(); //---------------------#2

// function add(number, group, name) {
//     let st = {number, group, name};
//     students.add(st);
// }

// function deleting(number) {
//     for (let student of students) {
//         if (student.number === number) {
//             students.delete(student);
//             break;
//         }
//     }
// }

// function filter(group) {
//     let ourGroup = [];
//     for (let student of students) {
//         if (student.group === group) {
//             ourGroup.push(student);
//         }
//     }
//     return ourGroup;
// }

// function sorting() {
//     return Array.from(students).sort(function(a, b) {
//         return a.number - b.number;
//     });
// }


// let st1 = {number: 123, group: "Первая", name: 'Иванов Иван Иванович'};
// let st2 = {number: 124, group: "Вторая", name: 'Петров Петр Петрович'};
// let st3 = {number: 122, group: "Первая", name: 'Сидоров Сергей Сергеевич'};
// students.add(st1); 
// students.add(st2); 
// students.add(st3); 
// console.log(students);


// let number_add = parseInt(prompt("Введите номер зачетки: "));
// let group_add = prompt("Введите группу: ");
// let name = prompt("Введите ФИО: ");
// add(number_add, group_add, name);
// console.log(students);

// let number = parseInt(prompt("Введите номер удаляемой зачетки: "));
// deleting(number);
// console.log(students);

// let group = prompt("Введите группу для поиска: ");
// let ourGroup = filter(group);
// console.log(ourGroup);

// let sortStudents = sorting();
// console.log(sortStudents);


// let products = new Map(); //------------------#3

// function add(id, name, amount, price) {
//     let pr = {name: name, amount: amount, price: price}
//     products.set(parseInt(id), pr);
// }

// function deletingId(delId) {
//     products.delete(parseInt(delId));
// }

// function deletingName(name) {
//     for (let [id, product] of products) {
//         if (product.name === name) {
//             products.delete(id);
//         }
//     }
// }

// function new_amount(idAmount, new_am) {
//     if (products.has(idAmount)) {
//         let product = products.get(idAmount);
//         product.amount = new_am;
//         products.set(idAmount, product);
//     }
// }

// function new_price(idPrice, new_pr) {
//     if (products.has(idPrice)) {
//         let product = products.get(idPrice);
//         product.price = new_pr;
//         products.set(idPrice, product);
//     }
// }

// function kolvo() {
//     let kolvo = 0;
//     for (let product of products.values()) {
//         kolvo += product.amount;
//     }
//     return kolvo;
// }

// function summa() {
//     let summa = 0;
//     for (let product of products.values()) {
//         summa += product.amount * product.price;
//     }
//     return summa;
// }

// let pr1 = {name: 'Яблоки', amount: 10, price: 1.5};
// let pr2 = {name: 'Бананы', amount: 5, price: 1.8};
// let pr3 = {name: 'Груши', amount: 8, price: 2.0};
// products.set(1, pr1);
// products.set(2, pr2);
// products.set(3, pr3);
// console.log(products.entries());

// let id = prompt("Введите новый ID: ");
// let new_name = prompt("Введите новый товар: ");
// let amount = prompt("Введите количество: ");
// let price = prompt("Введите цену: ");
// add(id, new_name, amount, price);
// console.log(products.entries());

// let delId = prompt("Введите удаляемый ID: ");
// deletingId(delId);
// console.log(products.entries());

// let delName = prompt("Введите удаляемый товар: ");
// deletingName(delName);
// console.log(products.entries());

// let idAmount = parseInt(prompt("Введите ID изменяемого товара: "));
// let new_am = parseInt(prompt("Введите новое количество: "));
// new_amount(idAmount, new_am);
// console.log(products.entries());

// let idPrice = parseInt(prompt("Введите ID изменяемого товара: "));
// let new_pr = parseInt(prompt("Введите новую цену: "));
// new_price(idPrice, new_pr);
// console.log(products.entries());

// console.log(`Количество позиций в списке: ${kolvo()}`);
// console.log(`Общая сумма товаров: ${summa()}`);

const cache = new WeakMap();   //-------------------4
function our_func(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = obj.a + obj.b;
  cache.set(obj, result);
  return result;
}
let obj = { a: 5, b: 10};
console.log(cache.has(obj)); 
console.log(our_func(obj)); 
console.log(cache.has(obj)); 
console.log(our_func(obj)); 
