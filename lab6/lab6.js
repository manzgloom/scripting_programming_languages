let numbers = [1, 2, 3];     //-------------------------1
let [y, ...rest] = numbers;
console.log(y);
console.log(rest);

let user = {             //---------------------2
    name: "John",
    age: 30
};
let admin = {
    id: "1357",
    firstname: "Jonson", 
    ...user
}
console.log(admin);

let store = {                          //--------------------3
    state: { // 1 уровень
        profilePage: { // 2 уровень
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
let {
    state: {
        profilePage: {posts, newPostText},
        dialogsPage: {dialogs, messages},
        sidebar
    }
} = store;
let likesCounts = posts.map(function(post) {
    return post.likesCount;
});
console.log(likesCounts);
let evenID = dialogs.filter(function(dialog) {
    if(dialog.id%2 ==0)
        return dialog.id;
});
console.log(evenID);
messages = messages.map(function(mess) {
    mess.message = 'Hello user';
    return mess;
});
console.log(messages);

let tasks = [                                   //------------------4
    { id:1, title: "HTML&CSS", isDone: true },
    { id:2, title: "JS", isDone: true },
    { id:3, title: "ReactJS", isDone: false },
    { id:4, title: "Rest API", isDone: false },
    { id:5, title: "GraphQL", isDone: false },
];
let task = { id: 6, title: "DataBase", isDone: true };
tasks = [...tasks, task];
console.log(tasks);

function sumValues(x, y, z){       //---------------5
    return x + y + z;
}
let mass = [1, 2, 3];
console.log(sumValues(...mass))


// let perem = { 
//     posts: [ // 3 уровень
//         {id: 1, message: 'Hi', likesCount: 12}, 
//         {id: 2, message: 'By', likesCount: 1},
//     ],
//     newPostText: 'About me',
// }
// let { posts, newPostText } = perem;
// let [ item1, item2] = posts;
// let {id, message, likesCount} = item1;
// let {id, message, likesCount} = item2;