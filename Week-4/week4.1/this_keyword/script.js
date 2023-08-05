class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return `I am studying ${this.subject}`;
  }
}

const person1 = new Person('John', 25, 'Male', 'American');
const person2 = new Person('Jane', 30, 'Female', 'Canadian');
const person3 = new Person('Bob', 20, 'Male', 'Astralian');

const student = new Student(
  'sarah',
  18,
  'female',
  'British',
  'Computer Science'
);

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
console.log(student.introduce());
console.log(student.study());
