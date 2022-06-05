function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?")
}

// reccomended way
const jay = Object.create(Student.prototype);

jay.name = 'Jay';
jay.grade = '12th';

console.log(jay.name);