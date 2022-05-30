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
Student.prototype.addMarks = function (mark1, mark2, ...mark3) {
  this.mark1 = mark1;
  this.mark2 = mark2;
  this.mark3 = mark3;
}
Student.prototype.getAverage = function (ma) {
  marks.forEach(callbackFunc);
  function callbackFunc(mark) {
    let sum = mark + mark;
    return sum / marks.length;
  }
}
Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  Student.excluded = reason;
}

const student1 new Student("Vasya", "men", 20);
const student2 new Student("Olya", "woman", 21);
const student3 new Student("Oleg", "men", 18);


// ваш код для остальных методов