let name = "rock";
let age = 19;
let gender = "male";
let married = false;
let address = "las vegas , los angels, UK.";

//object

let person = {
    name: "rock",
    age: 19,
    gender: "male",
    married: false,
    address: "las vegas , los angels, UK.",
    sibling: {
        ebro: "tom",
        ybro: "rio"
    }
} //object

console.log(person);

// dot notation 

console.log(person.name);
console.log(person.age);

// we can give like this dot notation

// we can change the values but not the keys.

person.age = 20
console.log(person.age);

// bracket notation
// []

console.log(person['gender'])

// we can call like this

console.log(person.sibling.ebro)
