//1
function makeCounter() {
    let currentCount = 1;
    return function() { 
        return currentCount++;
    };
}
let counter = makeCounter();
console.log(counter());//
console.log(counter());//
console.log(counter());//

let counter2 = makeCounter();
console.log(counter2());
console.log("//////");//
///////
let currentCountVar2 = 1;
function makeCounterVar2() {
    return function() {
        return currentCountVar2++;
    };
}

let counterVar2 = makeCounterVar2();
let counter2Var2 = makeCounterVar2();

console.log(counterVar2());//
console.log(counterVar2());//

console.log(counter2Var2());//
console.log(counter2Var2());//

console.log("//////");//


//2 каррирование
const parallelep = a => b => c => {
    return a*b*c;
}
console.log(parallelep(1)(6)(2));

let oneRebrOneNum = parallelep(5);
console.log(oneRebrOneNum(3)(8));
console.log(oneRebrOneNum(6)(1));

//3 спадарожнік 
let movement = Trip();
function* Trip() {
    let y = 0;
    let x = 0;

    while (true) {
        const choice = yield {x,y};
        switch (choice) {
            case "up" : y+=10; break;
            case "down" : y-=10; break;
            case "right" : x+=10; break;
            case "left" : x-=10; break;
            default : break;
        }
        console.log(`Теперь координаты (${x}, ${y})`);
    }
}
movement.next();
for (let i = 0; i<6; i++) {
    const choice = prompt("Впишите up/down/right/left:");
    movement.next(choice);
}

//4 подсчет всего в лекс окр
for (let prop in window) {
    if (window.hasOwnProperty(prop)) {
        console.log(`Свойствво: ${prop}, значение: ${window[prop]}`);
    }
}
let tempVar = 10;
console.log(tempVar);
window.tempVar = 10000;
console.log(tempVar);
window.calcVolume = function() {
    console.log("new calc func");
}
calcVolume();  