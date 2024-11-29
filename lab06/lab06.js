//1 дан массив, вывести первый элемент с помощью деструктуризации
const numbers = [1, 4, 7, 3];
const [first,,third] = numbers;
console.log(`Первый элемент массива: ${first}`);

//2 объект user со значениями name, age. создать объект admin, у которого будут свойства userа и adminа, используя spread
let user = {
    name: "Вкармашкин", 
    age: 34
}
let admin = {
    department: "новый",
    yearOfWorking: 2006,
    ...user
}
console.log(admin);
//console.log({...user, ...admin}); 

//3 
let store ={
    state: {  //1 уровень
            profilePage:{  //2 уровень
                        posts:[  //3 уровень
                            {id: 1, massage: 'Hi', likesCount: 12},
                            {id: 2, message: 'By', likesCount: 1},
                              ],
                        newPostText: 'About me',
                        },
            dialogsPage: {
                        dialogs: [
                            {id: 1, name: 'Valera'},
                            {id: 2, name: 'Andrey'},
                            {id: 3, name: 'Sasha'},
                            {id: 4, name: 'Viktor'},
                                 ],
                        messages:[
                            {id: 1, message: 'hi'},
                            {id: 2, message: 'hi hi'},
                            {id: 3, message: 'hi hi hi'},
                                 ],
                        },
            sidebar:[],
        },
}

let {state: {
    profilePage : 
        {posts}, 
    dialogsPage : 
        {dialogs, messages} 
    } 
} = store;

console.log("Считаем лайки: ");
posts.forEach(posts => {
    console.log(posts.id, "пост набрал", posts.likesCount, "лайк/ов");
});

let filteredDialogs = [];
dialogs.forEach((person) => {
    if(person.id % 2 == 0) {
        filteredDialogs.push(person.name);
    }
})
console.log(filteredDialogs);

messages = messages.map(message => ({
    message: "Hello user", 
    ...message
}));
//4 
let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
];
let task = {
    id: 6, title: "Новые покрышки", isDone: false
}
const {id, title, isDone} = task;
console.log("fdsfds" + id, title, isDone);
tasks = [...tasks, task];
console.log(tasks);
//5
let array = [1, 2, 3];
function sumValues(x, y, z) {
    return x + y + z ;
}
let sumOfArray = sumValues(...array);
console.log(sumOfArray);


