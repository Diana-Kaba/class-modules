import { Animal, Dog, Cat } from "./script.js";

let animal = new Animal("Hamster", 2);
console.log(animal.animalCharacteristic);
console.log(animal.walk());

let dog = new Dog("Foxter", 10);
console.log(dog.animalCharacteristic);
console.log(dog.walk());

let cat = new Cat("Myrka", 5);
console.log(cat.animalCharacteristic);
console.log(cat.walk());
