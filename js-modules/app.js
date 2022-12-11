import { firstName } from "./utils/fname.js";
import { age } from './utils/age.js';
import Person from "./Person.js";

console.log(firstName, age);

const peronData = new Person("Chandradip Shivankar", 23);

peronData.info();