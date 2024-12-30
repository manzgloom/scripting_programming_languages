console.log(1);
let user = {            //---------------1
    name: 'Masha',
    age: 21
};
let copyUser = {...user};
console.log(copyUser);

console.log(2);
let numbers = [1, 2, 3];      //-------------2 
let copi = [...numbers]; 
console.log(copi);

console.log(3);
let user1 = {      //-------------------3
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
let copyUser1 = {
    ...user1,
    location: { ...user1.location}
};
console.log(copyUser1); 

console.log(4);
let user2 = {             //--------------------4
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
let copyUser2 = {
    ...user2,
    skills: [ ...user2.skills]
};
console.log(copyUser2); 

console.log(5);
const array = [             //-----------------------5
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
const newCopi = array.map(item => ({...item}));
console.log(newCopi); 

console.log(6);
let user4 = {                 //---------------------6
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
let copyUser4 = {
    ...user4,
    studies: {
        ...user4.studies,
        exams: { ...user4.studies.exams}
    }
};
console.log(copyUser4); 


console.log(7);
let user5 = {                 //-----------------------------7
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
let copyUser5 = {
    ...user5,
    studies: {
        ...user5.studies,
        department: { ...user5.studies.department},
        exams: [ ...user5.studies.exams]
    }
};
copyUser5.studies.department.group = 12;
copyUser5.studies.exams[1].mark = 10; 
console.log(copyUser5); 

console.log(8);
let user6 = {                     //---------------------------8
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
                    name: 'Ivan Ivanov ',
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
let copyUser6 = {
    ...user6,
    studies: {
        ...user6.studies,
        department: { ...user6.studies.department},
        exams: user6.studies.exams.map(exam => ({
            ...exam,
            professor: { ...exam.professor }
        }))
    }
};
copyUser6.studies.exams[0].professor.name = 'Andrew Makeev'; 
copyUser6.studies.exams[1].professor.name = 'Oleg Makeev'; 
console.log(copyUser6); 

console.log(9);
let user7 = {                    //---------------------------------9
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
        exams: [
            { 
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
		        }
	        },
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
let copyUser7 = {
    ...user7,
    studies: {
        ...user7.studies,
        department: { ...user7.studies.department},
        exams: user7.studies.exams.map(exam => ({
            ...exam,
            professor: { 
                ...exam.professor,
                articles: exam.professor.articles.map(article => ({...article}))}
        })
        )
    }
};
copyUser7.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log(copyUser7);

console.log(10);
let store = {                               //-----------------------------10
    state: { // 1 уровень
        profilePage: { // 2 ypовень 
            posts: [ // 3 уровень
                {id: 1, message: 'Hi', likesCount: 12}, 
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
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'}, 
                {id: 3, message: 'hi hi hi'},
            ],
        },
    sidebar: [],
    },
}
let storeCopy = {
    ...store,
    state: {
        ...store.state,
        profilePage: {
            ...store.state.profilePage,
            posts: store.state.profilePage.posts.map(post => ({ ...post }))
        },
        dialogsPage: {
            ...store.state.dialogsPage,
            dialogs: [...store.state.dialogsPage.dialogs],
            messages: store.state.dialogsPage.messages.map(msg => ({ ...msg }))
        },
        sidebar: [...store.state.sidebar]
    }
};
store.state.dialogsPage.messages.map(function(mess) {
    mess.message = 'Hello';
});
console.log(store);