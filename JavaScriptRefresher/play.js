const name1 = "Max";
// let age = 29;
// const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobby
  );
};

// arrow function syntax
const add = (a, b) => a + b;
const addOne = (a) => a + 1;

// if no arguments, need to add ()
const addRandom = () => 2 + 3;

// console.log(summarizeUser(name1, age, hasHobbies));
console.log(add(1, 2));
console.log(addOne(2));
console.log(addRandom());


const person = {
  name: 'Max',
  age: 29,
  // Method of the object
  greet() {
    console.log('Hi, I am ' + this.name)
  }
}

const hobbies = ['Sports', 'Cooking', 1, true]

// Array destructuring, pulled out by position
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

console.log(person);
person.greet();

for (let hobby of hobbies) {
  console.log(hobby)
}

// map helps to transform the values, creates a new array
console.log(hobbies.map(hobby => {
  return 'Hobby: ' + hobby
}));
console.log (hobbies)

hobbies.push('Programming')
console.log(hobbies)

// const copiedArray = hobbies.slice();

// ... in this context is a spread operator that pulls out of the existing array and added to the new array
const copiedArray = [...hobbies];
hobbies.push('Biking')
console.log(copiedArray);

// Rest Operator: This will merge multiple arguments into an array
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

// Destructuring, pulls out the name key from the object

const printName = ({ name, age }) => {
  console.log(name);
}

printName(person)

// destructuring of person - const name has to be the same as the key in the object
const { name, age } = person;
console.log(name, age);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, 1500);
  });
  return promise;
};

// Async Code (Does not execute immediately)'
// Node.js / Javascript does not block
// Callback function (call in the future)
setTimeout(() => {
  console.log('Timer is done!')
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  })
  .then(text2 => {
    console.log(text2);
  });
}, 2000);

console.log('Hello!');
console.log('Hi!');