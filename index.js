const fetch = require("node-fetch");
//////////////////////  Map Method //////////////////////

const people = [
  {
    name: "Shubham",
    age: 26,
    profile: "Software Engineer",
  },
  {
    name: "Mandar",
    age: 23,
    profile: "Software Developer",
  },
  {
    name: "Rahul",
    age: 26,
    profile: "Software Engineer",
  },
  {
    name: "Kiran",
    age: 25,
    profile: "Software Tester",
  },
  {
    name: "Umesh",
    age: 32,
    profile: "Software Tester",
  },
];

const newPeople = people.map((item) => {
  return item.name;
});
// console.log("newPeople", newPeople);

const modifyPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
// console.log("modifyPeople", modifyPeople);

/////////////////////// Unique Values /////////////////////

const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "breakfast",
  },
  {
    name: "fires",
    category: "breakfast",
  },
  {
    name: "Dal Rice",
    category: "Dinner",
  },
  {
    name: "Paneer",
    category: "lunch",
  },
  {
    name: "Khichdi",
    category: "Dinner",
  },
  {
    name: "Chiken",
    category: "lunch",
  },
];

const menuList = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

// console.log("menuList", menuList);

///////////////// Dynamic Objects ///////////////////

const person = {
  name: "jhon",
};
person.age = 23;

// console.log(person);

const items = {
  "featured-items": ["item1", "item2"],
};
// console.log(items["featured-items"]);
// console.log(person["name"]);

let appState = "loading";
appState = "error";
//keyname set the value
const keyName = "computer";

const app = {
  [appState]: true,
  [keyName]: "intel",
};
app[keyName] = "apple";
// console.log(app);

const state = {
  loading: true,
  name: "",
  age: "",
};

const updateState = (key, value) => {
  state[key] = value;
};
updateState("age", "23");
updateState("name", "jhon");

// console.log(state);

///////////////////// Fiter and Find Method ////////////////////

const newPersons = people.filter((item) => {
  // if (item.age < 30) return person;

  return item.age < 30;
});
// console.log("newPerson", newPersons);

const position = people.filter((item) => item.profile === "Software Tester");
// console.log("position", position);

// If no data match in find method it gives undefined. It returns single instance and returns 1st match.
const findDeveloper = people.find((person) => person.name === "Paresh Kamble");
// console.log(("Name", findDeveloper));

const findDeveloperName = people.find((person) => person.name === "Mandar");
// console.log(("Name", findDeveloperName));

const randomPerson = people.find((item) => {
  return item.age < 30;
});
// console.log("random person", randomPerson);

///////////////////////// Reduce Method /////////////////////////

const staff = [
  { name: "Bob", age: 20, position: "developer", salary: 100 },
  { name: "Peter", age: 25, position: "designer", salary: 300 },
  { name: "Susy", age: 30, position: "the boss", salary: 400 },
  { name: "Anna", age: 35, position: "intern", salary: 10 },
];

//always set intial value
// reduce to single value number array object
// 1st para = total of all calculations
// 2nd para = current iteration value
const totalCount = staff.reduce((total, person) => {
  return total + person.salary;
}, 0);
console.log("totalCount", totalCount);

const cart = [
  {
    title: "Samsung Galaxy 7",
    price: 599.9,
    amount: 1,
  },
  {
    title: "Google Pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 399.99,
    amount: 3,
  },
];

const mobileCount = cart.reduce((total, mobile) => {
  return total + mobile.price;
}, 0);
console.log("mobileCount", mobileCount);

const total = cart.reduce(
  (total, cartItem) => {
    //     console.log("cart", cartItem);
    const { amount, price } = cartItem;
    //     console.log("cartItem", cartItem);
    total.totalItem += amount;
    total.cartTotal += price * amount;
    return total;
  },
  {
    totalItem: 0,
    cartTotal: 0,
  }
);
// console.log("total", total);

// Other method
let { totalItem, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    total.totalItem += amount;
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItem: 0,
    cartTotal: 0,
  }
);
cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log("other method", totalItem, cartTotal);

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  // console.log("new data", newData);
};
fetchRepo();

////////////////////////// Array Destructuring ///////////////////////
// faster or easier way to unpack/access the variable from arrays

const fruits = ["orange", "banana", "apple", "grapes"];

const friends = ["Kiran", "Mandar", "Rahul", "Pushpak"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log("fruits", fruit1, fruit2, fruit3);

// let [Kiran, Mandar, Rahul, Pushapk] = friends;

// if you add any new variable in array it gives undefined
//david not in the list david is undefined
// variable name can be anything
const [, asasdds, , Pushapk, David] = friends;

console.log("Friends", asasdds, Pushapk);

let first = "Shubham";

let second = "Patil";

// variable swapping
// let temp = second;
// second = first;
// first = temp;

// using Destructuring

[second, first] = [first, second];

console.log("name", first, second);

////////////////////// Object Destructuring ///////////////////////
//get undefined if key is not in the object
//order matter in the arrays but object dosen't matter order
const bob = {
  firstName: "bob",
  lastName: "willey",
  city: "new jersy",
  sibllings: {
    sister: "jane",
  },
};
let {
  lastName,
  firstName,
  city,
  sibllings: { sister: sister },
  zip,
} = bob;
console.log("object", firstName, lastName, city, sister, zip);

function printPerson(person) {
  const {
    firstName,
    lastName,
    sibllings: { sister: sister },
  } = person;
  console.log("full name", firstName, lastName, sister);
}
printPerson(bob);
