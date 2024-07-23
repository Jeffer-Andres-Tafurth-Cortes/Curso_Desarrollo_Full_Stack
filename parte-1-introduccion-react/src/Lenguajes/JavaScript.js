// DEFINIR VARIABLES
const x = 1
let y = 5

console.log(x, y) // se imprime 1, 5
y += 10
console.log(x, y); // se imprime 1, 15
y = 'sometext'
console.log(x, y); // se imprime 1, sometext
x = 4 // provoca error porque 'x' es una constante


// ARRAYS
const t = [1, 2, 3, 4, 5]
t.push(6)
console.log(t) // se imprime [1, 2, 3, 4, 5, 6]
console.log(t.length) // se imprime 5
console.log(t[1]) // se imprime 2
t.forEach(value => {
  console.log(value) // se imprime los numero 1, 2, 3, 4, 5 pero cada uno en su propia linea
})

const m1 = t.map(value => value * 2)
console.log(m1) // 1, 4, 6, 8, 10


// OBJETOS
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD'
}
console.log(object1.name) // se imprime Arto Hellas



// FUNCIONES
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

function sum1(p1, p2){
  console.log(p1)
  console.log(p2)
  return p1 + p2
}



// METODOS DE OBJETO Y 'THIS'
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`)
  }
}
arto.greet() // se imprime Hello, my name is Arto Hellas



// CLASES
class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 30)
janja.greet()




