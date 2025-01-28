// dreamDestination = "Spain";
// console.log(dreamDestination);
// year = 2025;
// console.log(year);
// girl = true;
// boy = false;
// console.log(boy);
// const monthsOfTheYear = ["January", "Febuary", "March"];
// console.log(monthsOfTheYear);
// const favouriteCities = {
//   city1: "Mecca",
//   city2: "Jerusalam",
//   city3: "mombasa",
//   city4: "Amsterdam",
// };
// console.log(favouriteCities);

// // const mombasa = {
// //   favouritePlace: "Lamu Beach",
// //   favouriteFoods: ["Biriyani", "chapati and maharagwe wa nazi"],
// //   preferredStayDurationInWeeks: 3,
// //   cold: false,
// //   warm: true,
// // };
// // console.log(mombasa);
// firstName: "Hafsa";

// let age = 20;
// console.log(age);
// age = 21;

// const car = { name: "BMW", year: 2017, colour: "red", year: 2018 };
// console.log(car);
// const students = ["Ryan", 12];
// const num = 1;
// console.log(typeof num.toString());

// console.log("first".charAt(0));

// const newCar = [
//   "KIA",
//   2017,
//   (red = true),
//   (blue = false),
//   { previousOwner: "Sam" },
// ];

// console.log("KIA".toLowerCase());
// console.log({ previousOwner: "sam".toUpperCase() });
// console.log("KIA".charAt(0));
// console.log(typeof newCar.toString());
// console.log(typeof newCar.toLocaleString());

// const favouriteFood = "Ethopian";

// switch (favouriteFood) {
//   case "Indian":
//     console.log("It is spicy!");
//     break;
//   case "Ethopian":
//     console.log("Yummy!");
//     break;
//   case "Italian":
//     console.log("I like there Pasta and Lasagna!");
//     break;
//   case "somali":
//     console.log("A taste of home :) ");
// }

class Water {
  constructor(brand, origin, packaging) {
    this.brand = brand;
    this.origin = origin;
    this.packaging = packaging;
  }
  classification() {
    return `${this.brand} can be classified based on it's purpose`;
  }
  mineralContent() {
    return `When drinking water for example ${this.brand}, it is good to know the mineral content of it`;
  }
}

const Water1 = new Water("Aqua", "Mineral", "plastic");
console.log(Water1.brand);
console.log(Water1.origin);
console.log(Water1.packaging);
console.log(Water1.classification());
console.log(Water1.mineralContent());

const Water2 = new Water("Evian", "Spring", "Glass bottle");
console.log(Water2.brand);
console.log(Water2.origin);
console.log(Water2.packaging);
console.log(Water2.classification());
console.log(Water2.mineralContent());

const Water3 = new Water("San Pellegrino", "Fiji", "Canned");
console.log(Water3.brand);
console.log(Water3.origin);
console.log(Water3.packaging);
console.log(Water3.classification());
console.log(Water3.mineralContent());
