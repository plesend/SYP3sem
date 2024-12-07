let  user = {
    name: 'Masha',
    age: 21
};

let userCope = {
    ...user
}

let numbers = [1, 2, 3];

let numbersCopy = [...numbers];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user1Copy = {...user1, location:{...user1.location}};

console.log(user1Copy);

let user2 = {
    name: 'Masha', 
    age: 28,
    skills: ["HTML", "css", "javascript", "react"]
};

let user2Copy = {...user2, skills:[user2.skills]};

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

const arrayCopy = array.map(elements => ({
    ...elements
}));

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user4Copy = {...user4, studies: 
    {...user4.studies, exams: 
        {...user4.studies.exams}
    } 
}

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let user5Copy = {
    ...user5, studies: {...user5.studies, department: {...user5.department}, exams: {...user5.exams.map(elems =>({...exams}))}}
}

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
        { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov',
		    degree: 'PhD'
		    }
	    },
        { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		    }
	    },
        ]
    }
};

let user6Copy = {
    ...user6, 
    studies: {...user6.studies, 
                department: {...user5.studies.department},
                exams: {
                    ...user5.studies.exams.map(elems => ({...elems, 
                                professor: {...elems.professor}
                    }))
                }
            }
}

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [{ 
		    maths: true,
		    mark: 8,
		    professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		    }},
        { 
		    programming: true,
		    mark: 10,
		    professor: {
		        name: 'Petr Ivanov',
		        degree: 'PhD',
		        articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		    }
	    },
        ]
    }
};

let user7Copy = {
    ...user7, 
    studies: {
        ...user7.studies,
        department: {
            ...user7.studies.department
        },
        exams: user7.studies.exams.map(exam => ({
            ...exam, 
            professor: {
                ...exam.professor,
                articles: exam.professor.articles.map(article => ({...article}))
            }
        }))
    }
}

let store ={
    state: {
        profilePage:{
            posts:[
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

let storeCopy = {
    state: {
        ...store.state,
        profilePage: {
            ...store.state.profilePage,
            posts: store.state.profilePage.posts.map(post => ({ ...post })),
        },
        dialogsPage: {
            ...store.state.dialogsPage,
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
            messages: store.state.dialogsPage.messages.map(message => ({ ...message })),
        },
        sidebar: [...store.state.sidebar],
    },
};

user5Copy.studies.department.group = 12;
user5Copy.studies.exams[1].programming.mark = 10;
console.log("Новая оценка по программированию: " + user5Copy.studies.exams[1].programming.mark);
console.log("Новое значение групп в копии5: " + user5Copy.studies.department.group);
user6Copy.studies.exams[0].professor.name = "Екатерина Сергеевна";
user6Copy.studies.exams[1].professor.name = "Алексей Вячеславович";
console.log("Новые преподаватели: " + user6Copy.studies.exams[0].professor.name + " " +user6Copy.studies.exams[1].professor.name);
user7Copy.studies.exams[1].professor.articles[1].pagesNumber = 3;

for(let i = 0; i < 3; i++) {
    console.log("Изменили количество страниц в артикле "+ i + ": " + user7Copy.studies.exams[1].professor.articles[i].pagesNumber);
}
for(let i = 0; i < 3; i++) {
    storeCopy.state.dialogsPage.messages[i].message = "Hello"
}
for(let i = 0; i < 3; i++) {
    console.log("теперь тут все хеллоу "+ i + ": " + storeCopy.state.dialogsPage.messages[i].message);
}
