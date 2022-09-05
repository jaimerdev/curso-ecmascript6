//Declarando
class User {

};

//Instancia de una clase

const newUser = new User();

//Ejemplo

class user {
    //Métodos
    greeting() {
        return 'Hello';
    };
};

const jaimerdev = new user();
console.log(jaimerdev.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor 

class user {
    //Constructor
    constructor() {
        console.log('Nuevo Usuario');
    };
    greeting() {
        return 'Hello';
    };
};

const lenin = new user();

//This 

class user {
    constructor(name) {
        this.name = name;

    }
    //Métodos
    speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const lenin = new user('Lenin');
console.log(lenin.greeting());

//Setters & Getters 

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Métodos
    speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age; 
    }
    set uAge(n) {
        this.age = n;
    }
}

const jaime = new user('Jaime', 24);
console.log(jaime.uAge);
console.log(jaime.uAge = 20);