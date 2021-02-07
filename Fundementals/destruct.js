const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

    // BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];
// // AFTER ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(firstAnimal);
// => horse

// AFTER ES6
const { email } = person;
const [firstAnimal] = animals;
// console.log(email);
// => bob@marley.com
// console.log(firstAnimal);
// => horse

//problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// random car is going to equal tesle
// ,  will go to next and will be mercedes
// honda will not print out

//problem 2

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// going to have syntax errors
//not output till fixed


// problem 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);
// going to have syntax errors because we already have one const that is person line 59


//problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// going to show false then true