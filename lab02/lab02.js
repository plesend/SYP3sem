//1
function basicOperation(operation, value1, value2) {
    let result;
    if (operation === '+') {
        result = value1 + value2;
      } else if (operation === '-') {
        result = value1 - value2;
      } else if (operation === '*') {
        result = value1 * value2;
      } else if (operation === '/') {
        if (value2 === 0) {
          result = 'Делить на ноль нельзя';
        } else {
          result = value1 / value2;
        }
      } else {
        result = 'Нет такой операции';
      }
    return result;
}
result = basicOperation('+', 5, 10);
console.log(result);


//2
let n = 6;

function multiply(multValue) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += i ** 3;
    }

    return sum;
}
console.log(`результат сложения кубов: ${multiply(4)}`);

//3
function average() {
    sumThree = 0;
    if (ArrayThree.Length === 0) {
        return 0;
    }
    
    for (let i = 0; i < ArrayThree.length; i++) {
        sumThree += ArrayThree[i];
    }
    let aver = sumThree/ArrayThree.length;
    return aver;
}
const ArrayThree = [2, 3, 4, 5, 6];
let result3 = average(ArrayThree);
console.log(`результат среднего арифметического: ${result3}`);

//4
let str = prompt("Введите строку, состоящую из латиницы и кириллицы");
function reverseAndFilterAlpha(str) {
    let reversedStr = str.split('').reverse().join('');
    let filteredStr = reversedStr.replace(/[^a-zA-Z]/g, '');
    return filteredStr;
}
console.log(reverseAndFilterAlpha(str)); 
//5
let s = "Малиновый";
function repeat(n, s) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res = res + s + ' ';
    }
    return res;
}
console.log(repeat(n, s));

//6
let arr1 = [2, 4, 6, 8, 9];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; 
function deleteElements(arr1, arr2) {
    let arr3 = [];
    let ind = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) === false) {
            arr3[ind++] = arr1[i];
        }
    }
    return arr3;
}
console.log(deleteElements(arr1, arr2));

let arrayExample = [1, 2, 3, 4];
let funEx = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += arrayExample[i];
  }
  return sum;
}

console.log(funEx(arrayExample));