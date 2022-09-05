var lastName = 'Jaime'; //Declarar y asignar o inicializar
lastName = 'Lenin'  //Reasignar
console.log(lastName); //Resultado: Lenin

let fruit = 'Apple'; //Declarar y asignar o inicializar
fruit = 'Kiwi'; // Reasignar
console.log(fruit); //Resultado: Kiwi

const animal = 'Dog'; //Declarar y asignar o inicializar 
animal = 'Cat'; //Reasignar 
console.log(animal); //Resultado: TypeError (No podemos reasignar con CONST)

const fruits = () => {
    if(true ){
        var fruit1 = 'Apple'; //function scope (Podemos acceder a la variable que esta dentro de una función)
        let fruit2 = 'Kiwi'; //block scope (Solo podemos a acceder a la variable dentro del bloque de código)
        const fruit3 = 'Banana'; //block scope (Solo podemos a acceder a la variable dentro del bloque de código)
    }
    console.log(fruit1); //Resultado: Podemos acceder a la varible
    console.log(fruit2); //Resultado: No podemos acceder a la varible
    console.log(fruit3); //Resulatado: No podemos accerder a la variable
}
fruits ();
