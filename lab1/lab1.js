let a = 5;
console.log("тип a - ", typeof a);
let name = "Name";
console.log("тип name - ", typeof name);
let i = 0;
console.log("тип i - ", typeof i);
let double = 0.23;
console.log("тип double - ", typeof double);
let result = 1/0;
console.log("тип result - ", typeof result);
let answer = true;
console.log("тип answer - ", typeof answer);
let no = null;
console.log("тип no - ", typeof no);

let litSide = 5;
let width = 45;
let height = 21;
let squareA = width * height;
let squareB = litSide ** 2;
let result1 = squareA/squareB;
let result2 = (parseInt(width/litSide))*(parseInt(height/litSide))
console.log("В четырехугольник А поместится", result1, "четырехугольников В");
console.log("В четырехугольник А поместится", result2, "четырехугольников В");

let k = 2;
let c = ++k;
console.log(c);
console.log(k);
let d = k++;
console.log(d);
console.log(k);
console.log("c = ", c, "d = ", d);
console.log("c > d", c > d);

console.log("Котик > котик -", "Котик" > "котик" ? "верно" : "неверно");
console.log("Котик > китик -", "Котик" > "китик" ? "верно" : "неверно");
console.log("Котик > Кот -", "Котик" > "Кот" ? "верно" : "неверно");
console.log("Привет > Пока -", "Привет" > "Пока" ? "верно" : "неверно");
console.log("73 > '53' -", 73 > "53" ? "верно" : "неверно");
console.log("false > 0,54 > true -", false > 0.54 > true ? "верно" : "неверно");
console.log("false > 123 -", false > 123 ? "верно" : "неверно");
console.log("true > '3' -", true > "3" ? "верно" : "неверно");
console.log("3 > '5мм' -", 3 > "5мм" ? "верно" : "неверно");
console.log("8 > '-2' -", 8 > "-2" ? "верно" : "неверно");
console.log("34 == '34' -", 34 > "34" ? "верно" : "неверно");
console.log("null > undefined -", null > undefined ? "верно" : "неверно");

let teacherName = "Иванов Алексей Федорович";
let newTeacherName = teacherName.toLowerCase();
let inputName = prompt("Введите имя преподавателя");
let newInputName = inputName.toLowerCase();
if (newTeacherName.includes(newInputName)) { 
    alert("Введенные пользователем данные верные."); 
} else { 
    alert("Введенные пользователем данные неверные."); 
}

let english = prompt("Введите 1 если студент сдал английский и 0 если не сдал: ");
let russian = prompt("Введите 1 если студент сдал русский и 0 если не сдал: ");
let math = prompt("Введите 1 если студент сдал математику и 0 если не сдал: ");
(english == 1 && russian == 1 && math == 1) ? alert("Студент переведен на следующий курс") : 
    (english == 0 && russian == 0 && math == 0) ? alert("Студент отчислен") : alert("Студент отправлен на пересдачу");

console.log("true + true =", true + true);
console.log("0 + '5' = ", 0 + "5");
console.log("5 + 'мм' = ", 5 + "мм");
console.log("8/Infinity = ", 8/Infinity);
console.log("9 * '\n9' = ", 9 * "\n9");
console.log("null - 1 = ", null - 1);''
console.log("'5' - 2 = ", "5" - 2);
console.log("'5px' - 3 = ", "5px" - 3);
console.log("true - 3 = ", true - 3);
console.log("7 || 0 = ", 7 || 0);

let counter = 1;
while(counter < 11) {
    (counter % 2 == 0) ? console.log(counter + 2) : console.log(counter + "мм");
    counter++;
}

let day;
let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let chosenDay = prompt("Введите порядковый номер необходимого дня недели: ");
for (let count = 0; count < 7; count++) {
    if (chosenDay == count + 1) {
        day = count;
    }
}
alert( days[day] );

let object = {     
    1: "пн",  
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб",
    7: "вс",        
  };
  let choseDay = prompt("Введите порядковый номер необходимого дня недели: ");
  choseDay = parseInt(choseDay);
  alert( object[choseDay] );

function showWeather(first, second, condition) {
    alert(first + second + condition);
}
let condition = prompt("Охарактеризуйте сегодняшнюю погоду:");
showWeather("Погода ", "сегодня ", condition);

function params(a, b) {
    if (a == b) {
        return(a*2 + b*2);
    } else {
        return(a*b);
    }
}
let a1 = 5;
let b1 = 5;
console.log(params(a1, b1));
let a2 = 5;
let b2 = 7;
console.log(params(a2, b2));

let params2 = function(a, b) {
    if (a == b) {
        return(a*2 + b*2);
    } else {
        return(a*b);
    }
};
let a3 = 6;
let b3 = 6;
console.log(params2(a3, b3));
let a4 = 9;
let b4 = 7;
console.log(params2(a4, b4));

let params3 = (a, b) => {
    if (a == b) {
        return(a*2 + b*2);
    } else {
        return(a*b);
    }
};
let a5 = 7;
let b5 = 7;
console.log(params3(a5, b5));
let a6 = 3;
let b6 = 4;
console.log(params3(a6, b6));

let tr = (10&&7);
console.log(tr);