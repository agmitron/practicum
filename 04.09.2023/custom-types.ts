type Name = string;
type Password = string;
type Age = number;

type StringsMoreThan8Symbols = string;

type Form = {
  name: Name;
  password: StringsMoreThan8Symbols;
  age: Age;
};

interface IForm {
  name: Name;
  password: StringsMoreThan8Symbols;
  age: Age;
}

const FEMALE = 0;
const MALE = 1;

enum Gender {
  Female = "female",
  Male = "male",
}

class Person {
  gender: Gender;
  age: Age;
  private weight: number;
  name: Name;

  constructor(gender: Gender, age: Age, weight: number, name: Name) {
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.name = name;
  }

  public lossWeight(amount: number) {
    this.weight = this.weight - amount;
  }

  private _dream() {
    console.log("Dreaming...");
  }

  public startDreaming() {
    setInterval(() => {
      this._dream();
    }, 1000);
  }
}

const person = new Person(Gender.Female, 50, 65, "Galina");

document.addEventListener("click", () => {
  person.startDreaming();
});
