export default class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  walk() {
    super.walk();
    console.log(`${this.name} run!`);
  }
  get animalCharacteristic() {
    return `Name: ${this.name} and age: ${this.age}`;
  }
  set animalCharacteristic(newValue) {
    this.name = newValue;
    this.age = newValue;
  }
}
