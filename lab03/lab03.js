function makeArray(array) {
    return array.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? makeArray(val) : val);
      }, []);
}
const array1 = [1, [1, 2, [3, 4]], [2, 4]];
const array2 = [3, 12, [9, 7]];
const madeArray = makeArray(array1).concat(makeArray(array2));
console.log(madeArray);

//2
function findArraySum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      sum += findArraySum(element); 
    } else {
      sum += element;
    }
  });

  return sum;
}
const result2 = findArraySum(array1);
console.log(result2);

//3
function filterStudentsByAge(students) {
  const result = {};

  for (const student of students) {
    if (student.age > 17) {
      if (!result[student.groupId]) {
        result[student.groupId] = [];
      }
      result[student.groupId].push(student);
    }
  }
  return result;
}
const students = [
  { name: 'Студент 1', age: 13, groupId: 6 },
  { name: 'Студент 2', age: 18, groupId: 6 },
  { name: 'Студент 3', age: 19, groupId: 9 }
];
const studentsResult = filterStudentsByAge(students);
console.log(studentsResult);

//4
function makeCodeOutOfSymb(symbString) {
  let numString = "";
  for (let i = 0; i < symbString.length; i++) {
    numString += symbString.charCodeAt(i);
  }
  return numString;
}
const total1 = makeCodeOutOfSymb("ABC");
const total2 = total1.replace('7', '1');
const minusTwoTotals = total1 - total2;
console.log(`Вычли тоталы: ${minusTwoTotals}`);

//5
function objectOperation(...objects) {
  result5 = {};
  Object.assign(result5, ...objects)
  return result5;
}
const resultOne = objectOperation({a: 1, b: 2}, {c: 3});
console.log(resultOne);

const resultTwo = objectOperation({a: 1, b: 2}, {c: 3}, {d: 4});
console.log(resultTwo); 

const resultThree = objectOperation({a: 1, b: 2}, {a: 3, c: 3});
console.log(resultThree); 

//6
function pyramid(n) {
  let platters = [];
    for(let i=1; i<= n; i++)
    {
        let space = ' ';
        for(let j = 0; j < n - i; j++)
        {
            space += ' ';
        }
        let stars = ''
        for(let j = 0; j < (2*i-1); j++)
        {
            stars += '*';
        }
        platters.push(space + stars)
    }
    return platters;
}
console.log(pyramid(5).join('\n'));

