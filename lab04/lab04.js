let set = new Set();
let product1 = "сварочный аппарат";

function addProduct(value) {
    set.add(value);
    console.log(value + " появился в списке товаров!!!!");
}
function deleteProduct(value) {
    set.delete(value);
    console.log(value + " удален из списка товаров(((");
}
function isHere(value) {
    console.log(set.has(value));
}
console.log(set.size);

addProduct(product1);
isHere(product1);
deleteProduct(product1);
isHere(product1);

//2
const set1 = new Set();

let student1 = {num: 70734, group: 3, name: "Разумовский Сергей Александрович"};
let student2 = {num: 74534, group: 9, name: "Волков Олег Давидович"};
let student3 = {num: 75736, group: 7, name: "Мин Пак аызвщазв"};

addStudent(student1);
addStudent(student3);
addStudent(student2);
deleteByNum(70734);
console.log("Текущий список студентов", Array.from(set1));
let groupSize = sortByGroup(7);
console.log("Текущий список студентов в 7 группе: " + groupSize.size);
const sortByN = sortByNum();
console.log(sortByN);


function addStudent(student) {
    set1.add(student);
}

function deleteByNum(studentId) {
    set1.forEach((student) => {
        if (student.num === studentId) {
            set1.delete(student);
        }
    });
}

function sortByGroup(groupST) {
    const sortedStudents = new Set();
    set1.forEach((student) => {
        if(student.group === groupST) {
            sortedStudents.add(student)
        }
    });
    return sortedStudents;
}

function sortByNum() {
   const filtStud = Array.from(set1);
   filtStud.sort((a, b) => a.num - b.num);
   return filtStud;
}
//3
let prods = new Map();

function addProductMap(id, name, quantity, price) {
    if (!prods.has(id)) {
        prods.set(id, { name, quantity, price });
    } else {
        const ourProd = prods.get(id);
        ourProd.name = name;
        ourProd.quantity = quantity;
        ourProd.price = price;
    }
}

function deleteProductById(id) {
    prods.delete(id);
}

function deleteProdByName(name) {
   for (const [id, product] of prods) {
       if (product.name === name) {
       prods.delete(id);
     }
   }
}

function updateQuantity(id, newQuantity) {
   if (prods.has(id)) {
     prods.get(id).quantity = newQuantity;
   }
}

function updatePrice(id, newPrice) {
  if (prods.has(id)) {
        prods.get(id).price = newPrice;
    }
}

function countItems() {
  return prods.size;
}

function calculateTotalPrice() {
    let total = 0;
       for (const product of prods.values()) {
       total += product.quantity * product.price;
    }
    return total;
}

// Пример использования функций
addProductMap(1, "новые покрышки", 10, 1.5);
addProductMap(2, "малина", 15, 0.75);
addProductMap(3, "ведро", 12, 2.0);

console.log("Текущее количество различных товаров:", countItems());

updateQuantity(2, 20);
console.log("Новое количество товара 'новые покрышки':", prods.get(2).quantity);

updatePrice(3, 67);
console.log("Новая цена товара 'малина': ", prods.get(3).price);

deleteProdByName("малина");
console.log("Товар 'малина' удален. Щас товаров:", countItems());

console.log("Сумма всех товаров:", calculateTotalPrice());



// задание 4
let map4 = new WeakMap();

function checkCash(input) {
  if (map4.has(input)) {
    console.log("Взяли из кеша ");
    return map4.get(input);
  }

  const result = input.key * 10;
  map4.set(input, result);

  return result;
}

const input1 = {key: 12};
const input2 = {key: 13};

console.log(checkCash(input1)); 
console.log(checkCash(input1)); 
console.log(checkCash(input2)); 
console.log(checkCash(input2));