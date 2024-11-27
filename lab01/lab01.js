let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;

//2
const width = 45;
const height = 21;
const littleSquare = 5*5;

const BigSquare = width * height;
const CountSquares = BigSquare/littleSquare;

console.log(`Поместится ${Math.floor(CountSquares)} квадратов`);

//3
let ii = 6;
let aa = ii--;
let b = ii++;

console.log(aa, b, ii);

//4
console.log('Котик' > 'котик' ? true : false); 
console.log('Котик' > 'китик' ? true : false); 
console.log('Кот' > 'Котик' ? true : false); 
console.log('Привет' > 'Пока' ? true : false); 
console.log(73 > '53' ? true : false); 
console.log(false > 0 ? true : false); 
console.log(54 > true ? true : false); 
console.log(123 > false ? true : false); 
console.log(true > '3' ? true : false); 
console.log(3 > '5mm' ? true : false); 
console.log(8 > '-2' ? true : false); 
console.log(34 > '34' ? true : false); 
console.log(null > undefined ? true : false);

//5
const surname = "Кудлацкая Мария Федоровна";
const surnameInput = prompt("введите фамилию: ");
const surnameInpLC = surnameInput.toLowerCase();
const surnameLC = surname.toLowerCase();
const surnameComponents = surnameLC.split(" ");
const inputComponents = surnameInpLC.split(" ");

let match = false;
for (const userWord of inputComponents) {
  if (surnameComponents.includes(userWord)) {
    console.log(surnameComponents.includes(userWord));
    match = true;
    break; 
  }
}

if (match) {
  console.log('Введенные вами данные верные.');
} {
  console.log('Введенные вами данные неверные.');
}

//6

let ex_1 = prompt(`Сдал ли студент экзамен по математике? (ДА - "+", НЕТ - "-")`);
let ex_2 = prompt(`Сдал ли студент экзамен по русскому? (ДА - "+", НЕТ - "-")`);
let ex_3 = prompt(`Сдал ли студент экзамен по английскому? (ДА - "+", НЕТ - "-")`);

if (ex_1 == '+' && ex_2 == '+' && ex_3 == '+') {
  console.log(`Победа, перевели`);
} else if (ex_1 == '-' && ex_2 == '-' && ex_3 == '-') {
  console.log(`Отчислили()`);
} else if (ex_1 == '-' || ex_2 == '-' || ex_3 == '-') {
    console.log(`На пересдачу`);
}

//7
console.log("ex");
let ex7_1 = true + true;
console.log(ex7_1);
let ex7_2 = 0 + "5";
console.log(ex7_2);
let ex7_3 = 5 + "mm";
console.log(ex7_3);
let ex7_4 = 8 / Infinity;
console.log(ex7_4);
let ex7_5 = 9 * "\n9";
console.log(ex7_5);
let ex7_6 = null - 1;
console.log(ex7_6);
let ex7_7 = "5" - 2;
console.log(ex7_7);
let ex7_8 = "5px" - 3;
console.log(ex7_8);
let ex7_9 = true - 3;
console.log(ex7_9);
let ex7_10 = 7 || 0;
console.log(ex7_10);

//8

let arr = [10];
for (let count = 0; count < 10; count++) {
    arr[count] = count + 1;

    if (arr[count] % 2 == 0)
        arr[count] += 2;

    if (arr[count] % 2 != 0)
        arr[count] = `${arr[count]}mm`;

    console.log(`${arr[count]}`);
}

//9

let week = ["понедельнику", "вторнику", "среде", "четвергу", "пятнице", "субботе", "воскресенью"];
let choice_week = prompt(`Введите число:`) - 1;
console.log(`Данная цифра соответствует ${week[choice_week]}`);

//10
function combineStrings(defaultValue = "Default", user) {
  if (user === undefined) {
    return `Параметры: ${defaultValue}, отсутствует`;
  }
    return `Параметры: ${defaultValue}, ${user}`;
  }

const user = prompt("Введите третий параметр:");
const result10 = combineStrings(undefined, user);
console.log(result);

//11
function paramsDeclaration(a, b) {
  if (a === b) {
    return 4 * a; 
  } 
    return a * b; 
}

const paramsExpression = function(a, b) {
  if (a === b) {
    return 4 * a; 
  } 
    return a * b; 
};

// Функция-стрелка (Arrow Function)
const paramsArrow = (a, b) => (a === b ? 4 * a : a * b);

const sideA = parseFloat(prompt("Введите длину стороны A:"));
const sideB = parseFloat(prompt("Введите длину стороны B:"));

const resultDeclaration = paramsDeclaration(sideA, sideB);
const resultExpression = paramsExpression(sideA, sideB);
const resultArrow = paramsArrow(sideA, sideB);

if (sideA === sideB) {
  console.log(`Это квадрат, его периметр: ${resultDeclaration}`);
} else {
  console.log(`Это прямоугольник, его площадь (Function Declaration): ${resultDeclaration}`);
}

if (sideA === sideB) {
  console.log(`Это квадрат, его периметр: ${resultExpression}`);
} else {
  console.log(`Это прямоугольник, его площадь (Function Expression): ${resultExpression}`);
}

if (sideA === sideB) {
  console.log(`Это квадрат, его периметр: ${resultArrow}`);
} else {
  console.log(`Это прямоугольник, его площадь (Arrow Function): ${resultArrow}`);
}



