//Arrays destructuring 

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = {username: 'Jaime', age: 24};
let {username, age} = user;
console.log(username, user.age);

// Spread operator 

let person = {name: 'jaime', age: 24};
let country = 'EC';

let data = {...person, country}; //sirve para referirse al objeto y tomar sus atributos
console.log(data);

//Rest 

function sum(num, ...values) { //toma todos los argumentos y lo asigna al parámetro values
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
