function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;

}
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}
Student.prototype.addMarks = function (mark1, mark2, mark3) {
  this.marks = mark1;
  this.marks = mark2;
  this.marks = mark3;
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark1, ...mark2, ...mark3);
  }
}
Student.prototype.getAverage = function () {
  marks.reduce((prev, item) => {
    return (prev + item) / this.marks.length
  });

}
Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  Student.excluded = reason;
}

let student1 = new Student("Vasya", "Мужской", 20);
let student2 = new Student("Petya", "Мужской", 20);
let student3 = new Student("Lena", "Женский", 18);
// ваш код для остальных методов