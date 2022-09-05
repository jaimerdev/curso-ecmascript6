class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Métodos
    #speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age; 
    }
    set #uAge(n) {
        this.age = n;
    }
}

const jaime = new user('Jaime', 24);
console.log(jaime.uAge);
console.log(jaime.uAge = 20);