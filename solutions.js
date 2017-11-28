// STRINGS
// 1
let firstName = 'Esther';
console.log(firstName);

// 2
let lastName = 'Weon';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// 3
let arrayOfNames = fullName.split(" ");
console.log(arrayOfNames);

// ARRAYS
// 1
let foods = ['apple', 'banana', 'candy', 'donut', 'egg'];
console.log(foods[4]);

// 2
let friends = [
  "Moe",
  "Jane",
  "Emma",
  "Elizabeth",
  "Abanov",
  "Lycia"
];
friends[3] = 'Liz';
console.log(friends);

// 3
friends.push("Esther");
friends.unshift("Bob!");
console.log(friends);

// 4
let myFriends = [
  "Rickon",
  "Meera",
  "Hodor",
  "Jojen",
  "Osha",
  "Rickard",
  "Maester"
];

let yourFriends = [
  "Bilbo",
  "Boromir",
  "Elrond",
  "Faramir",
  "Frodo",
  "Gandalf",
  "Legolas",
  "Pippin"
];

let allFriends = myFriends.concat(yourFriends);
console.log(allFriends.sort());

// OBJECTS
// 1
let johnDoe = {
   firstName: "John",
   lastName: "Doe",
   age: 36,
   address: {
     street: "Park St.",
     number: 1234
   }
}

// 2
let people = [{
   firstName: "John",
   lastName: "Doe",
   age: 36,
   address: {
     street: "Park St.",
     number: 1234
   }
}, {
  firstName: "Mary",
  lastName: "Doe", 
  age: 31, 
  address: {
    street: "Spark St.",
    number: 1239
  }
}];

// MORE COMPLEX STRUCTURES
let clubs = [
    {
      name: 'Yearbook',
        students: [
          { first: 'Joe', last: 'Lakin' },
          { first: 'Evalyn', last: 'Bradtke' },
          { first: 'Samuel', last: 'Black' }
      ],
        teacher: 'James Friar'
    },
    {
    	name: 'Jazz Band',
        students: [
          { first: 'Douglas', last: 'Wisoky' },
          { first: 'Cora', last: 'Thompson' },
          { first: 'Samuel', last: 'Ziemann' },
          { first: 'Alana', last: 'Cortez'}
        ],
        teacher: 'Luther Richards'
    },
    {
        name: 'Swim Team',
        students: [
          { first: 'Cora', last: 'Thompson' },
          { first: 'Samuel', last: 'Black' },
          { first: 'Alana', last: 'Cortez'},
          { first: 'Joe', last: 'Lakin' }
        ],
        teacher: 'Carol Darby'
    }
];
// 1
console.log(clubs);
console.log(clubs.length);
console.log(clubs[1]);
console.log(clubs[0].teacher);
console.log(clubs[1].students);
console.log(clubs[2].students[1].last);

// 2
let me = { first: 'Esther', last: 'Weon' };

// 3
clubs[2].students.push(me);

// 4
let lawClub = {
  name: 'Legal Eagles',
  students: [],
  teacher: 'Abby Fuentes'
};

clubs.push(lawClub);
clubs[3].students.push(me);

// 5
clubs[0].students[2].first = 'Sam';
clubs[2].students[1].first = 'Sam';

// 6
clubs.shift();
clubs.pop();
