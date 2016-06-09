function GradeBook() {
  this.students = [];
}

GradeBook.prototype.addStudent = function(student) {
  this.students.push(student);
}

function Student(name) {
  this.name = name;
  this.grades = [];
}

Student.prototype.addGrade = function(grade) {
  this.grades.push(grade);
}

module.exports = {
  GradeBook: GradeBook,
  Student: Student
};
